import { useReducer } from "react"
import Button from "../components/Button"
import Panel from "../components/Panel"

const INCREMENT_COUNT = 'increment'
const DECREMENT_COUNT = 'decrement'
const CHANGE_VALUE_TO_ADD = 'changeValueToAdd'
const ADD_VALUE_TO_COUNT = 'addValueToCount'

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      }
    case CHANGE_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload
      }
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }
    default:
      throw new Error('unexpected action type:', action.type)
  }
}

const CounterPage = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  })

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    })
  }
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT
    })
  }
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({
      type: ADD_VALUE_TO_COUNT
    })
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={increment}>Increment</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  )
}

export default CounterPage
