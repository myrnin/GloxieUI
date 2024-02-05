import { styled } from "@mui/material/styles";

const StyledHeader = styled("div")`
  .storybook-header {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .storybook-header svg {
    display: inline-block;
    vertical-align: top;
  }

  .storybook-header h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    margin: 6px 0 6px 10px;
    display: inline-block;
    vertical-align: top;
  }

  .storybook-header button + button {
    margin-left: 10px;
  }

  .storybook-header .welcome {
    color: #333;
    font-size: 14px;
    margin-right: 10px;
  }
`;

export { StyledHeader };
