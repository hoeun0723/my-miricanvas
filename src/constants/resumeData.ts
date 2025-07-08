import type { ResumeDataType } from "../type/resumeDataType";

export const RESUME_DATA: ResumeDataType = {
  name: "왕호은",
  summary:
    "특성화고부터 개발을 시작해 다양한 분야를 경험하며 스스로 성장하는 방법을 익혀왔습니다. 웹 개발에 매력을 느껴, 4번의 IT 동아리 활동과 10회의 프로젝트 배포를 경험하며 실전 경험을 쌓았습니다. '왜 이렇게 해야 하는가'를 끊임없이 질문하며 흐름을 파악하고 사고력을 기르는 습관은 저만의 강점입니다. 새로운 도전 앞에서 두려움을 즐거움으로 바꾸는 태도로 장기적인 임팩트를 남기는 개발자가 되고자 합니다.",
  image: '/public/profile-image.jpg',
  contact: {
    email: "hoeun0723@naver.com",
    github: "https://github.com/hoeun0723",
    blog: "https://hoeun0723.github.io/",
    youtube: "https://buly.kr/7bH5wVU",
  },
  projects: [
    {
      name: "허니어리",
      date: "2024.03 - 2024.06",
      role: "Team Leader / Infra",
      techStack: [
        "Spring Boot",
        "Java",
        "AWS",
        "React",
        "JavaScript",
        "styled-components",
        "OpenAI",
        "Vercel",
      ],
      description:
        "생성형 AI를 활용한 하루 기록 서비스 허니어리 개발. 2024 한국항공대학교 산학프로젝트 1등 수상, 디스콰이엇 위클리 프로덕트 1위 선정. 총 154명의 사용자 확보.",
      learned: [
        {
          title: "아키텍처 설계 및 서버 배포",
          details: [
            {
              title: "3개의 서버(Client / Server / AI)로 구성된 서비스의 안정적인 운영",
              contents: [
                "REST API 연동을 위한 보안 처리 필요 ⇒ certbot을 활용한 HTTPS 적용",
                "refresh token 탐색 시 RDS 사용 시 시간복잡도 O(n) ⇒ Redis 도입으로 탐색 시간 O(1)로 최적화",
                "Vercel을 활용한 프론트엔드 배포 ⇒ GitHub 기반의 빠른 배포 구조 확립",
                "Client ↔ API ↔ AI 서버 간 명확한 도메인 분리 및 호출 구조 설계",
              ],
            },
            {
              title: "초기 개발 속도 향상을 위한 사전 세팅",
              contents: [
                "백엔드 / 프론트엔드 공통 초기 세팅 ⇒ Handler 및 폴더 구조 사전 설계로 팀 개발 편의성 증대",
                "Gradle 빌드 및 Secrets Manager 기반 환경변수 적용을 자동화 ⇒ GitHub Actions 기반 CI/CD 구축",
              ],
            },
          ],
          result:
            "처음 접한 기술 (certbot, AWS CodeDeploy, Redis 등)을 빠르게 습득하고 직접 적용하는 과정을 통해 Infra 전반에 대한 이해와, 운영환경을 구축하는 역량을 체득할 수 있었습니다.",
        },
        {
          title: "Google Analytics 활용 (스타일 예외처리 및 수익률 개선)",
          details: [
            {
              title: "접속 플랫폼과 기기별 사용자 행동 분석",
              contents: [
                "다양한 환경에서 발생하는 스타일 깨짐 ⇒ Google Analytics 기반 플랫폼별 접속 비율 분석을 통해 문제 발생 우선순위 도출",
                "주요 접속 환경(iOS/Android/PC 등)에 맞춘 스타일 예외처리 우선 적용으로 전반적인 UI 안정성 확보",
              ],
            },
            {
              title: "수익 모델 최적화를 위한 광고 전략 수정",
              contents: [
                "유입률 높은 페이지 식별 ⇒ Kakao AdFit 광고 노출 위치를 재배치하여 CTR 향상 유도",
                "플랫폼별 광고 배치 성능 차이를 지속적으로 트래킹하며 수익률 분석 및 개선 사이클 수행",
              ],
            },
          ],
          result:
            "사용자 행동 데이터 분석 기반의 문제 해결 경험을 통해 정량적 지표를 바탕으로 UI 리팩토링과 BM 개선이 가능한 역량을 기를 수 있었습니다.",
        },
      ],
    },
    {
      name: "SWEET",
      date: "2023.12 - 2024.03",
      role: "FrontEnd Developer",
      techStack: [
        "React",
        "TypeScript",
        "styled-components",
        "Tanstack Query",
        "Github Actions",
        "Vercel",
      ],
      description:
        "토너먼트를 통해 의미 있는 선물을 선택하는 서비스 기획 및 개발. SOPT 33기 APPJAM 최우수상 수상, 디스콰이엇 위클리 프로덕트 1위 선정. 총 219명의 사용자 확보.",
      learned: [
        {
          title: "코드 구조 개선 및 렌더링 최적화를 통한 협업 효율성 향상",
          details: [
            {
              title:
                "읽기 쉬운 코드 = 좋은 코드 라는 목표 아래, 스프린트 중 코드 리팩토링과 최적화 작업을 병행하며 협업 효율성을 높이는 구조로 개선하였습니다",
              contents: [
                "공통 컴포넌트 재사용성을 높이기 위해 interface 설계에 집중하여 범용적인 구조 설계 → 다양한 케이스에 대응 가능한 입력 타입 명세화 및 props 유효성 검토",
                "스타일과 로직 혼재로 인한 코드 가독성 저하 문제 해결 → styled-components + design system + mixin 구조로 관심사 분리 및 반복 스타일 정리",
                "반복되는 온보딩 단계를 효율적으로 구성하기 위해 Funnel 패턴 도입 → 상태 및 레이어 관리 일관성 확보",
              ],
            },
          ],
          result:
            "관심사의 분리 및 재사용성 높은 인터페이스 설계를 통해 협업 효율성과 코드 유지 보수를 동시에 향상시킬 수 있었고, 성능 최적화까지 고려하는 실무 수준의 프론트엔드 구현 경험을 쌓았습니다.",
        },
        {
          title: "이미지 최적화를 위한 Opengraph, Presigned URL 도입",
          details: [
            {
              title:
                "링크 삽입 시 이미지 로딩 지연으로 사용자 불편을 유발한다는 문제를 인지하고, Opengraph와 Presigned URL을 도입하여 이미지 렌더링 속도를 개선",
              contents: [
                "링크 입력 시 페이지 정보를 스크래핑하여 이미지를 불러오는 구조에서 렌더링 딜레이 발생 ⇒ Opengraph 도입을 통해 불필요한 DOM 파싱 최소화 및 이미지 정보 선별적 수집",
                "선물 리스트 페이지처럼 이미지가 반복적으로 다수 로드되는 구조에서는 S3 Presigned URL 방식 도입 ⇒ 사용자 요청 시점 기준 짧은 시간 동안만 유효한 URL을 발급하여 보안성 유지 + 요청 지연 최소화 달성",
              ],
            },
          ],
          result:
            "이미지 요청 구조를 서버-클라이언트 전반에서 점검하고 최적화하여 최대 30%의 렌더링 속도 개선 효과를 확인하였고, 사용자 경험(UX)과 성능(Performance)을 동시에 향상시킬 수 있었습니다.",
        },
      ],
    },
    {
      name: "Co-nect",
      date: "2021.12 - 2023.02",
      role: "FrontEnd Developer",
      techStack: [
        "React",
        "JavaScript",
        "styled-components",
        "Context API",
        "storybook",
        "msw",
        "Js-doc",
      ],
      description:
        "프로젝트를 함께할 팀원을 찾는 데 어려움을 겪는 사람들을 위해, 개인 또는 팀 단위로 공고글을 등록하고 비공개·공개 댓글을 통해 소통할 수 있는 팀빌딩 도움 웹 서비스를 개발했습니다. custom hooks 제작 및 instance 생성 등 불편한 점들을 기초부터 개선하려고 노력한 프로젝트입니다.",
      learned: [
        {
          title: "상태관리 Migration (Redux → React Context API)",
          details: [
            {
              title:
                "전역 상태보다 서버 동기화 중심의 구조가 필요하다고 판단하여, Context API + Custom Hooks + Axios 구조로 상태관리 전략을 리디자인",
              contents: [
                "전체 프로젝트를 분석한 결과, 전역 상태 사용이 적고 대부분 서버 상태와 동기화가 필요한 구조⇒ Redux 도입 대신 Context API 기반 커스텀 상태관리 구조로 전환",
                "Context API 도입 시 state와 action을 분리한 두 개의 useContext export 구조 적용⇒ 컴포넌트 계층 구조에서 props drilling 최소화 + 렌더링 최적화",
                "axios 호출을 위한 커스텀 훅 useAxios 설계",
              ],
            },
          ],
          result:
            "프로젝트 요구에 적합한 경량화된 상태관리 전략을 적용하여 불필요한 Redux 설정 제거 + 서버와의 동기화 중심의 명확한 상태 흐름 구현 경험을 할 수 있었습니다.",
        },
        {
          title: "도메인별 API 분리 및 공통 에러 핸들러 구성",
          details: [
            {
              title:
                "반복적으로 사용되는 API 요청 코드의 구조 개선과 관심사의 분리를 위해, 도메인 단위의 API 파일 분리 및 공통 에러 핸들러를 도입",
              contents: [
                "게시글 저장/조회 중심 서비스 특성상, API 호출 빈도가 높고 중복되는 코드가 많았음 ⇒ 코드의 일관성과 유지보수를 위해 5개의 도메인별 API 파일로 분리하여 관리",
                "private(로그인 필요) / public(비로그인 접근) API 요청을 분리⇒ Axios 인스턴스를 역할에 따라 분리 구성, 불필요한 인증 에러 방지 및 요청 가독성 확보",
              ],
            },
          ],
          result:
            "API 요청 코드를 일관된 구조로 정리함으로써 각 도메인별 책임을 명확히 하고, 반복 작업 최소화 + 리팩토링 효율성 향상을 경험할 수 있었습니다.",
        },
      ],
    },
  ],
  experiences: {
    awards: [
      "2024 KAU 2학기 IoT 경진대회 최우수상",
      "2024 KAU 2학기 Adventure Design 1등",
      "2024 KAU 1학기 산학프로젝트 1등",
      "33기 APPJAM 최우수상",
      "33기 SOPKATHON 최우수상",
      "33기 SOPKATHON 인기상",
      "DDD WEB MVP",
      "2022 한국항공대학교 프로그래밍 경시대회 1등",
      "2021 새내기 대학생활백서 영상공모전 장려상",
      "2021 KAU 창업경진대회 대상",
    ],
    education: [
      "SOPT 33기 WEB 파트 수료",
      "구름톤 in Jeju 8기 수료",
      "DDD 9기 WEB 파트 수료",
      "UMC 1기 SERVER 파트 수료",
      "한국항공대학교 졸업예정",
      "한국디지털미디어고등학교 졸업",
      "설리번 프로젝트",
      "미디어아트 꿈의 학교",
    ],
  },
};
