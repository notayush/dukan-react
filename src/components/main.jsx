import Dropdown from 'react-bootstrap/Dropdown';
import MyCrd from "./dltcrd"

function mainPage(){

    
    return(<div className="main">
        <div className="topbar">
            <div className="first">
                <h5>Payments <span><i class="ri-question-line"></i>How it works</span></h5>
            </div>
            <div className="search"> 
                <input type="search" placeholder="Search feature, tutorial, etc."></input> 
            </div>
            <div className="icons">
                <i class="ri-message-2-line"></i>
                <i class="ri-arrow-down-s-fill"></i>
            </div>
        </div>
        <div className='second'>
            <h2>
                Overview
            </h2>
            <Dropdown>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
        Last Month
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>

        <div className='third'>
            <div className='elem'><h6>online orders</h6><h2>231</h2></div>
            <div className='elem'><h6>amount recieved</h6><h2>₹23,92,312.19</h2></div>
        </div>
        <div className='fourth'>Transactions | This Month</div>
        <div className='listcnt'>
            <div className='listsrch'><input type="search" placeholder="Search feature, tutorial, etc."></input> 
            <div className='right'>
                <a>Sort <i class="ri-sort-desc"></i> </a>
                <a><i class="ri-download-2-line"></i></a>
            </div>
            </div>
            <div className='heading'>
                <div className='left'>
                    <h5>Order ID</h5>
                    <h5> Order date <i class="ri-arrow-drop-down-fill"></i> </h5>
                </div>
                <div className='right' >
                <h5>Order amount</h5>
                <h5>Transactions fee <i class="ri-question-line"></i> </h5>
                </div>
            </div>
            <MyCrd  />

            <div className='pagination'>
            <h5> <i class="ri-arrow-drop-left-line"></i> Previous</h5>
      <h6>1</h6>
      <h6>...</h6>
      <h6>10</h6>
      <h6>11</h6>
      <h6>12</h6>
      <h6>13</h6>
      <h6>14</h6>
      <h6>15</h6>
      <h5>Next <i class="ri-arrow-right-s-line"></i> </h5>
      
            </div>
        </div>
        
    </div>)
}

export default mainPage;