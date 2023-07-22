class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="header-div">
          <div class="left-div">
            <div class="create-own-quote header-common-style">
              <button class="btn btn-success light plus-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
              <span>Create your own quote</span>
            </div>
            <div
              class="generate-customer-invoice header-common-style header-no-background"
            >
              <button class="btn btn-success light plus-btn">
                <i class="fa-solid fa-plus"></i>
              </button>
              <span>Generate Customer Invoice</span>
            </div>
            <div class="my-account header-common-style header-no-background">
              <img src="./assets/image/profileAvater.svg" alt="" />
              <span>My Account</span>
            </div>
          </div>
          <div class="right-div">
            <div class="greetings">
              <span>Hi, Adam</span>
            </div>
            <div class="since-days">
              <span>(25 Days)</span>
            </div>
            <div class="time-div">13.12.13</div>
          </div>
        </div>`
    }
}

customElements.define('my-header',MyHeader)


class SideBar extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="sidebar" style="background-color: black">
        <div class="logo">
          <img class="logoImg" src="./assets/image/image_logo.svg" alt="" />
        </div>
        <hr />
        <div class="menu">
          <ul>
            <div class="side-bar-item-div">
              <li class="side-bar-item active">
                <a href="javascript:void(0)"
                  ><img
                    class="icon_img"
                    src="./assets/image/statistics.svg"
                    alt=""
                  /><span>My Statistics</span></a
                >
              </li>
            </div>
            <div class="side-bar-item-div">
              <li class="side-bar-item dropdown-sub-menu enquiry-sub-menu">
                <a href="javascript:void(0)"
                  ><img
                    class="icon_img"
                    src="./assets/image/enquiry.svg"
                    alt=""
                  /><span>Enquiry</span></a
                >
              </li>
              <div>
                <ul class="dropdown-sub-items displayToggle">
                  <li class="dropdown-sub-item active-sub-item">
                    <a href="javascript:void(0)"
                      ><img
                        class="icon_img"
                        src="./assets/image/line.svg"
                        alt=""
                      /><span>Engines</span></a
                    >
                  </li>

                  <li class="dropdown-sub-item">
                    <a href="javascript:void(0)"
                      ><img
                        class="icon_img"
                        src="./assets/image/line.svg"
                        alt=""
                      /><span>Gearboxes</span></a
                    >
                  </li>

                  <li class="dropdown-sub-item">
                    <a href="javascript:void(0)"
                      ><img
                        class="icon_img"
                        src="./assets/image/line.svg"
                        alt=""
                      /><span>Ancillaries</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="side-bar-item-div">
              <li class="side-bar-item">
                <a href="javascript:void(0)"
                  ><img
                    class="icon_img"
                    src="./assets/image/quotes.svg"
                    alt=""
                  /><span>My Quotes</span></a
                >
              </li>
            </div>
            <div class="side-bar-item-div">
              <li class="side-bar-item">
                <a href="javascript:void(0)"
                  ><img
                    class="icon_img"
                    src="./assets/image/job.svg"
                    alt=""
                  /><span>My Jobs</span></a
                >
              </li>
            </div>
            <div class="side-bar-item-div">
              <li class="side-bar-item">
                <a href="javascript:void(0)"
                  ><img
                    class="icon_img"
                    src="./assets/image/employee.svg"
                    alt=""
                  /><span>Employee</span></a
                >
              </li>
            </div>
            <div class="side-bar-item-div">
              <li class="side-bar-item dropdown-sub-menu hidden-sub-menu">
                <a href="javascript:void(0)"
                  ><img
                    class="icon_img"
                    src="./assets/image/hidden.svg"
                    alt=""
                  /><span>Hidden</span></a
                >
              </li>
              <div>
                <ul class="dropdown-sub-items displayToggle">
                  <li class="hidden-dropdown-sub-item hidden-active-sub-item">
                    <a href="javascript:void(0)"
                      ><img
                        class="icon_img"
                        src="./assets/image/line.svg"
                        alt=""
                      /><span>Engines</span></a
                    >
                  </li>

                  <li class="hidden-dropdown-sub-item">
                    <a href="javascript:void(0)"
                      ><img
                        class="icon_img"
                        src="./assets/image/line.svg"
                        alt=""
                      /><span>Gearboxes</span></a
                    >
                  </li>

                  <li class="hidden-dropdown-sub-item">
                    <a href="javascript:void(0)"
                      ><img
                        class="icon_img"
                        src="./assets/image/line.svg"
                        alt=""
                      /><span>Ancillaries</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
        <div style="visibility: none; height: 30px"></div>
        <div class="logout_div">
          <img class="logout_img" src="./assets/image/logout.svg" alt="" />
          <h4>Logout</h4>
        </div>
      </div>
        `
    }
}
customElements.define('my-side-bar',SideBar)

class Filter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="filter-div">
          <div class="left-div">
            <div class="date-range">
              <span>Date Range</span>
              <i class="fa-regular fa-calendar"></i>
            </div>
            <div class="choose">
              <span>choose a make...</span>
            </div>
            <div class="search">
              <div class="select-div">
                <button
                  type="button"
                  class="btn dropdown-toggle text-light dropdown-type"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Car type
                </button>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control search-input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="search"
                  />
                </div>
              </div>
              <div class="search-div"></div>
            </div>
          </div>
          <div class="right-div">
            <button class="btn filter-btn filter-right-div-btn-active">
              All
            </button>

            <button class="btn filter-btn">Hide</button>

            <button class="btn filter-btn">Quote</button>
          </div>
        </div>
        `
    }
}

customElements.define('my-filter',Filter)