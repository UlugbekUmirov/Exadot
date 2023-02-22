import styled from "styled-components";
const Header = styled.div`
  .header {
    background: #f1f9ff;
    padding: 20px 0px;
    align-items: center;
    border: none;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    color: #2A2941;
  }
  li {
    list-style-type: none;
    margin-right: 36px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }
  button {
    padding: 16px 24px;
    background-color: #2a2941;
    border-radius: 10px;
    color: white;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    border: none;
  }
  @media (max-width: 1000px) {
    .hooter-link {
      display: none;
    }
    @media (max-width: 768px) {
      button {
        padding: 12px 16px;
        font-size: 15px;
      }
    }
  }
`;

export default function Headers() {
  return (
    <div>
      <Header>
        <div className="header">
          <div className="container" style={{ alignItems: "center" }}>
            <div>
              <img src="/Group 427320960.svg" alt="" />
            </div>
            <div className="hooter-link" style={{ alignItems: "center" }}>
              <ul style={{ display: "flex", padding: "0", margin: "0" }}>
                <li>
                  <a href="#course">Курсы</a>
                </li>
                <li style={{ alignItems: "center" }}>
                  B2B
                  <img
                    style={{ marginBottom: "3px" }}
                    src="/header vector.svg"
                    alt=""
                  />
                </li>
                <li>
                  <a href="#/">Блог</a>
                </li>
                <li style={{ margin: "0" }}>
                  <a href="#contact"> Контакты</a>
                </li>
              </ul>
            </div>
            <div>
              <a href="#contact">
                <button>Оставить заявку</button>
              </a>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
}
