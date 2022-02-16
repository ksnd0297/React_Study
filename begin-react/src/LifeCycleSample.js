import { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref 설정할 부분

  // 생성자
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // props에 있는 값을 state에 넣을 때 사용하는 메서드 71번째 줄
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 컴포터는가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
    // true : 다음 라이프사이클 메서드를 계속 실행하고
    // false : 작업을 중지합니다 업데이트 취소
  }

  // 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 리렌더링을 완료한 후 실행합니다.
  // snapshot 값을 
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트되기 직전 색상 : ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/*this.props.missing.value*/}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
