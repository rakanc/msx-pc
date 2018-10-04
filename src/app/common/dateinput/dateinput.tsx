import * as React from 'react';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import './dateinput.css';

const DayPickerStrings: IDatePickerStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],

  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',

  isRequiredErrorMessage: 'Start date is required.',

  invalidInputErrorMessage: 'Invalid date format.'
};

interface IDateInputProps {
  label: string;
  required?: boolean;
  value?: Date;
  cname?: string;
  firstDayOfWeek?: DayOfWeek;
  onSelectDate?: (event: Date) => void;
  onFormatDate?: (event: Date) => string;
  onParseDateFromString?: (event: string) => Date;
};

const DateInput: React.SFC<IDateInputProps> = ({ label, cname, onSelectDate, value, onFormatDate,
    required, onParseDateFromString }: IDateInputProps) => {

  const cn = cname ? `${cname}` : "DateField";

  return (
    <div className={cn}>
      <DatePicker
          label={label}
          isRequired={required}
          allowTextInput={true}
          ariaLabel={'Date picker'}
          firstDayOfWeek={DayOfWeek.Sunday}
          strings={DayPickerStrings}
          value={value!}
          onSelectDate={onSelectDate}
          formatDate={onFormatDate}
          parseDateFromString={onParseDateFromString}
        />
    </div>
  );
};

DateInput.defaultProps = {
  value: null,
  required: true,
  firstDayOfWeek: DayOfWeek.Sunday,
}

export default DateInput;
