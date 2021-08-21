import React, {Component} from 'react';

interface Props {

}

interface State {

}

class Introduce extends Component<Props, State> {
    render() {
        return (
            <div>
                <div>- React.js, Typescript 기반의 Front-End 개발자</div>
                <div>- webpack 및 map/chart/editor/MobX 등 다양한 라이브러리 경험</div>
                <div>- 대량의 데이터(초당 수천 건)가 실시간으로 업데이트 되는 기기 모니터링 Web Application 화면 개발 경험</div>
                <div>- pdf, MS office 기반 문서 검색을 주 기능으로 하는 검색 포털 사이트 개발 경험</div>
                <div>- 2년 간 개발자 간 소통을 극대화하고 항상 최선의 코드를 작성하는 Test-Driven Development, Pair Programming 진행</div>
                <div>- RESTful API 기반의 Microservice Architecture 경험 및 AWS/Azure Cloud 인프라 기반 CI/CD 경험</div>
                <div>- Java/C++ 개발 경험을 보유하여 새로운 언어를 빠르게 습득하고, Front-End 개발 시에도 다각적인 접근 가능</div>
            </div>
        );
    }
}

export default Introduce;