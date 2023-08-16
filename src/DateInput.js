import { useState } from "react"

const DateInput = () => {
  const [month, setMonth] = useState(1)
  const [day, setDay] = useState(1)
  const [dayCount, setDayCount] = useState(31)
  const months = [
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
  ]
  const days = new Array(dayCount).fill(0).map((_, i) => i + 1)

  const handleMonthChange = e => {
    const val = parseInt(e.target.value)
    setMonth(val)
    const newCount = parseDayCount(val)
    setDayCount(newCount)
  }

  const handleDayChange = e => {
    const val = parseInt(e.target.value)
    setDay(val)
  }

  const handleClick = () => {
    console.log(`${month}/${day}`)
  }

  const parseDayCount = (curMonth) => {
    const longMonths = new Set([1, 3, 5, 7, 8, 10, 12])
    const shortMonths = new Set([4, 6, 9, 11])
    if(longMonths.has(curMonth)){
      return 31
    }else if(shortMonths.has(curMonth)){
      return 30
    }else{
      return 28
    }
  }

  return (
    <div>
      <select value={month} onChange={handleMonthChange}>
        {months.map(
          (month, i) => <option key={i} value={i + 1}>{month}</option>
        )}
      </select>
      <select value={day} onChange={handleDayChange}>
        {
          days.map((i) => <option key={i} value={i}>{i}</option>)
        }
      </select>
      <button onClick={handleClick}>Log State</button>
    </div>
  )
}

export default DateInput