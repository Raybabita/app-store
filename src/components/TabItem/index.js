// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, isActive, getActiveTab} = props
  const {displayText, tabId} = tabItemDetails
  const ActiveTabClass = isActive ? 'active' : ''

  const onTabItem = () => {
    getActiveTab(tabId)
  }

  return (
    <li className="list-item">
      <button
        className={`button-item ${ActiveTabClass}`}
        onClick={onTabItem}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
