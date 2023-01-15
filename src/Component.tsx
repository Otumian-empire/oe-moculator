import { FunctionComponent } from "react";
import { TitleProps, ButtonProps } from "./util";

export const MyTitle: FunctionComponent<TitleProps> = (props: TitleProps) => {
  return <div className="myTitle">{props.name}</div>;
};

export const MyButton: FunctionComponent<ButtonProps> = (
  props: ButtonProps
) => {
  return (
    <div>
      <button className={`myButton ${props.className}`} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
};

export const MyInputArea: FunctionComponent = () => {
  return (
    <div className="myInputArea">
      <form action="" method="get" className="myForm myRow">
        <input type="text" name="" id="" className="inputField" />
        <label htmlFor="operator" className={"inputLabel"}>
          {":"}
        </label>
        <MyButton
          label="="
          type="submit"
          className="myButtonSubmit"
          onClick={(event) => {
            event.preventDefault();
            alert("Hello");
          }}
        />
      </form>
    </div>
  );
};

export const MyFunctionArea: FunctionComponent = () => {
  return (
    <div className="myFunctionArea">
      <MyButton
        label="CHR"
        type="submit"
        className="myButtonFunction"
        onClick={(event) => {
          event.preventDefault();
          alert("CHR");
        }}
      />

      <MyButton
        label="CLR"
        type="submit"
        className="myButtonFunction"
        onClick={(event) => {
          event.preventDefault();
          alert("CLR");
        }}
      />

      <MyButton
        label="PHR"
        type="submit"
        className="myButtonFunction"
        onClick={(event) => {
          event.preventDefault();
          alert("PHR");
        }}
      />
    </div>
  );
};

export const KeypadArea: FunctionComponent = () => {
  return (
    <div>
      <div className="myRow">
        <MyButton
          label="1"
          type="button"
          className="myButtonKey"
          onClick={(event) => {
            event.preventDefault();
            alert("1");
          }}
        />

        <MyButton
          label="2"
          type="submit"
          className="myButtonKey"
          onClick={(event) => {
            event.preventDefault();
            alert("2");
          }}
        />

        <MyButton
          label="4"
          type="submit"
          className="myButtonKey"
          onClick={(event) => {
            event.preventDefault();
            alert("4");
          }}
        />
      </div>

      <div className="myRow">
        {" "}
        <MyButton
          label="4"
          type="submit"
          className="myButtonKey"
          onClick={(event) => {
            event.preventDefault();
            alert("4");
          }}
        />
        <MyButton
          label="5"
          type="submit"
          className="myButtonKey"
          onClick={(event) => {
            event.preventDefault();
            alert("5");
          }}
        />
        <MyButton
          label="6"
          type="submit"
          className="myButtonKey"
          onClick={(event) => {
            event.preventDefault();
            alert("6");
          }}
        />
      </div>

      <div className="myRow">
        <MyButton
          label="7"
          type="submit"
          className="myButtonKey"
          onClick={(event) => {
            event.preventDefault();
            alert("7");
          }}
        />
        <MyButton
          label="8"
          type="submit"
          className="myButtonKey"
          onClick={(event) => {
            event.preventDefault();
            alert("8");
          }}
        />
        <MyButton
          label="9"
          type="submit"
          className="myButtonKey"
          onClick={(event) => {
            event.preventDefault();
            alert("9");
          }}
        />
      </div>
      <div className="myRow">
        <MyButton
          label="0"
          type="submit"
          className="myButtonKey"
          onClick={(event) => {
            event.preventDefault();
            alert("0");
          }}
        />
        <MyButton
          label="."
          type="submit"
          className="myButtonKey"
          onClick={(event) => {
            event.preventDefault();
            alert(".");
          }}
        />
        <MyButton
          label="+"
          type="submit"
          className="myButtonOperator"
          onClick={(event) => {
            event.preventDefault();
            alert("+");
          }}
        />
      </div>

      <div className="myRow">
        <MyButton
          label="-"
          type="submit"
          className="myButtonOperator"
          onClick={(event) => {
            event.preventDefault();
            alert("-");
          }}
        />
        <MyButton
          label="*"
          type="submit"
          className="myButtonOperator"
          onClick={(event) => {
            event.preventDefault();
            alert("*");
          }}
        />
        <MyButton
          label="/"
          type="submit"
          className="myButtonOperator"
          onClick={(event) => {
            event.preventDefault();
            alert("/");
          }}
        />
      </div>
    </div>
  );
};
