// Tremor Raw Calendar [v0.0.4]

"use client";

import {
	RiArrowLeftDoubleLine,
	RiArrowLeftSLine,
	RiArrowRightDoubleLine,
	RiArrowRightSLine,
} from "@remixicon/react";
import { addYears, format, isSameMonth, type Locale } from "date-fns";
import * as React from "react";
import {
	type CalendarMonth,
	DayPicker,
	type DayPickerProps,
	type Matcher,
	type PropsRange,
	type PropsSingle,
	useDayPicker,
} from "react-day-picker";

import { cx, focusRing } from "@/lib/utils";

interface NavigationButtonProps
	extends React.HTMLAttributes<HTMLButtonElement> {
	onClick: () => void;
	icon: React.ElementType;
	disabled?: boolean;
}

const NavigationButton = React.forwardRef<
	HTMLButtonElement,
	NavigationButtonProps
>(
	(
		{ onClick, icon, disabled, ...props }: NavigationButtonProps,
		forwardedRef,
	) => {
		const Icon = icon;
		return (
			<button
				ref={forwardedRef}
				type="button"
				disabled={disabled}
				className={cx(
					"flex size-8 shrink-0 select-none items-center justify-center rounded border p-1 outline-none transition sm:size-[30px]",
					// text color
					"text-gray-600 hover:text-gray-800",
					"dark:text-gray-400 hover:dark:text-gray-200",
					// border color
					"border-gray-300 dark:border-gray-800",
					// background color
					"hover:bg-gray-50 active:bg-gray-100",
					"hover:dark:bg-gray-900 active:dark:bg-gray-800",
					// disabled
					"disabled:pointer-events-none",
					"disabled:border-gray-200 disabled:dark:border-gray-800",
					"disabled:text-gray-400 disabled:dark:text-gray-600",
					focusRing,
				)}
				onClick={onClick}
				{...props}
			>
				<Icon className="size-full shrink-0" />
			</button>
		);
	},
);

NavigationButton.displayName = "NavigationButton";

type KeysToOmit = "mode";

type SingleProps = Omit<PropsSingle, KeysToOmit>;
type RangeProps = Omit<PropsRange, KeysToOmit>;

type CalendarProps = {
	enableYearNavigation?: boolean;
} & (
	| ({
			mode: "single";
	  } & SingleProps)
	| ({
			mode?: never;
	  } & SingleProps)
	| ({
			mode: "range";
	  } & RangeProps)
) &
	Pick<
		DayPickerProps,
		| "numberOfMonths"
		| "disableNavigation"
		| "locale"
		| "className"
		| "classNames"
	>;

interface CaptionProps {
	displayMonth: Date;
	enableYearNavigation?: boolean;
	disableNavigation?: boolean;
	locale?: Pick<Locale, "options" | "localize" | "formatLong">;
}

const Caption = ({
	displayMonth,
	enableYearNavigation,
	disableNavigation,
	locale,
}: CaptionProps) => {
	const dayPickerContext = useDayPicker();
	const { goToMonth, nextMonth, previousMonth } = dayPickerContext;

	// Get numberOfMonths from props or default to 1
	const numberOfMonths = 1;
	const displayMonths = [{ date: displayMonth }];

	const displayIndex =
		displayMonths?.findIndex((month) =>
			isSameMonth(displayMonth, month.date),
		) || 0;
	const isFirst = displayIndex === 0;
	const isLast = displayIndex === (displayMonths?.length || 1) - 1;

	const hideNextButton = numberOfMonths > 1 && (isFirst || !isLast);
	const hidePreviousButton = numberOfMonths > 1 && (isLast || !isFirst);

	const goToPreviousYear = () => {
		const targetMonth = addYears(displayMonth, -1);
		if (previousMonth && goToMonth) {
			goToMonth(targetMonth);
		}
	};

	const goToNextYear = () => {
		const targetMonth = addYears(displayMonth, 1);
		if (nextMonth && goToMonth) {
			goToMonth(targetMonth);
		}
	};

	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-1">
				{enableYearNavigation && !hidePreviousButton && (
					<NavigationButton
						disabled={disableNavigation || !previousMonth}
						aria-label="Go to previous year"
						onClick={goToPreviousYear}
						icon={RiArrowLeftDoubleLine}
					/>
				)}
				{!hidePreviousButton && (
					<NavigationButton
						disabled={disableNavigation || !previousMonth}
						aria-label="Go to previous month"
						onClick={() => previousMonth && goToMonth(previousMonth)}
						icon={RiArrowLeftSLine}
					/>
				)}
			</div>

			<div
				aria-live="polite"
				className="text-sm font-medium capitalize tabular-nums text-gray-900 dark:text-gray-50"
			>
				{format(displayMonth, "LLLL yyy", { locale })}
			</div>

			<div className="flex items-center gap-1">
				{!hideNextButton && (
					<NavigationButton
						disabled={disableNavigation || !nextMonth}
						aria-label="Go to next month"
						onClick={() => nextMonth && goToMonth(nextMonth)}
						icon={RiArrowRightSLine}
					/>
				)}
				{enableYearNavigation && !hideNextButton && (
					<NavigationButton
						disabled={disableNavigation || !nextMonth}
						aria-label="Go to next year"
						onClick={goToNextYear}
						icon={RiArrowRightDoubleLine}
					/>
				)}
			</div>
		</div>
	);
};

const ChevronLeft = (): React.ReactElement => (
	<RiArrowLeftSLine aria-hidden="true" className="size-4" />
);

const ChevronRight = (): React.ReactElement => (
	<RiArrowRightSLine aria-hidden="true" className="size-4" />
);

interface CaptionWrapperProps {
	calendarMonth: CalendarMonth;
	enableYearNavigation?: boolean;
	disableNavigation?: boolean;
	locale?: Partial<Locale>;
}

const CaptionWrapper = ({
	calendarMonth,
	enableYearNavigation,
	disableNavigation,
	locale,
}: CaptionWrapperProps) => (
	<Caption
		displayMonth={calendarMonth.date}
		enableYearNavigation={enableYearNavigation}
		disableNavigation={disableNavigation}
		locale={locale as Pick<Locale, "options" | "localize" | "formatLong">}
	/>
);

// Create a context for passing props to optimized components
const CalendarContext = React.createContext<{
	enableYearNavigation?: boolean;
	disableNavigation?: boolean;
	locale?: Partial<Locale>;
} | null>(null);

// Optimized component definitions outside of parent component
interface ChevronProps {
	orientation?: "left" | "right" | "up" | "down";
}

const ChevronComponent = (props: ChevronProps) => {
	const { orientation } = props;
	if (orientation === "left") return <ChevronLeft />;
	if (orientation === "right") return <ChevronRight />;
	return <span />;
};

// Optimized MonthCaption component outside of parent
const MonthCaptionComponent = ({
	calendarMonth,
}: {
	calendarMonth: CalendarMonth;
}) => {
	const { enableYearNavigation, disableNavigation, locale } =
		React.useContext(CalendarContext) || {};
	return (
		<CaptionWrapper
			calendarMonth={calendarMonth}
			enableYearNavigation={enableYearNavigation}
			disableNavigation={disableNavigation}
			locale={locale}
		/>
	);
};

const Calendar = ({
	mode = "single",
	numberOfMonths = 1,
	enableYearNavigation = false,
	disableNavigation,
	locale,
	className,
	classNames,
	...props
}: CalendarProps) => {
	// Memoize context value to prevent unnecessary re-renders
	const contextValue = React.useMemo(
		() => ({ enableYearNavigation, disableNavigation, locale }),
		[enableYearNavigation, disableNavigation, locale],
	);

	return (
		<CalendarContext.Provider value={contextValue}>
			<DayPicker
				mode={mode}
				numberOfMonths={numberOfMonths}
				locale={locale}
				showOutsideDays={numberOfMonths === 1}
				className={cx(className)}
				classNames={{
					months: "flex space-y-0",
					month: "space-y-4 p-3",
					nav: "gap-1 flex items-center rounded-full size-full justify-between p-4",
					table: "w-full border-collapse space-y-1",
					head_cell:
						"w-9 font-medium text-sm sm:text-xs text-center text-gray-400 dark:text-gray-600 pb-2",
					row: "w-full mt-0.5",
					cell: cx(
						"relative p-0 text-center focus-within:relative",
						"text-gray-900 dark:text-gray-50",
					),
					day: cx(
						"size-9 rounded text-sm text-gray-900 focus:z-10 dark:text-gray-50",
						"hover:bg-gray-200 hover:dark:bg-gray-700",
						focusRing,
					),
					day_today: "font-semibold",
					day_selected: cx(
						"rounded",
						"aria-selected:bg-indigo-600 aria-selected:text-gray-50",
						"dark:aria-selected:bg-indigo-500 dark:aria-selected:text-gray-50",
					),
					day_disabled:
						"!text-gray-300 dark:!text-gray-700 line-through disabled:hover:bg-transparent",
					day_outside: "text-gray-400 dark:text-gray-600",
					day_range_middle: cx(
						"!rounded-none",
						"aria-selected:!bg-gray-100 aria-selected:!text-gray-900",
						"dark:aria-selected:!bg-gray-900 dark:aria-selected:!text-gray-50",
					),
					day_range_start: "rounded-r-none !rounded-l",
					day_range_end: "rounded-l-none !rounded-r",
					day_hidden: "invisible",
					...classNames,
				}}
				components={{
					Chevron: ChevronComponent,
					MonthCaption: MonthCaptionComponent,
				}}
				{...(props as SingleProps & RangeProps)}
			/>
		</CalendarContext.Provider>
	);
};

Calendar.displayName = "Calendar";

export { Calendar, type Matcher };
