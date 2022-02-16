import useInputs from "./useInputs";
import { useReducer } from "react";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  // useEffect(() => {
  //   console.log("effect");
  //   console.log(name);
  //   return () => {
  //     // 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행
  //     // 두 번째 파라미터로 빈 배열을 넣을 때 오직 언마운트될 때만 뒷정리 함수를 호출
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, [name]);

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
