import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1)

  const handleClick = (newIndex) => {
    if (expandedIndex === newIndex) {
      setExpandedIndex(-1)
    } else {
      setExpandedIndex(newIndex)
    }
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex

    const icon = (
      <span className="text-xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    )

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)} className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between">
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    )
  })

  return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion
