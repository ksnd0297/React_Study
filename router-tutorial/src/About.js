import { useLocation } from "react-router-dom";
import qs from "qs";

const About = () => {
  const location = useLocation();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  console.log(query.aaa);

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액터 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {<p>detail 값을 로 설정하셨군요 !</p>}
    </div>
  );
};

export default About;