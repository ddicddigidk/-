export const operationProcess = {
  label: "운영 프로세스",
  title: "상담부터 피드백까지 단계적으로 진행합니다",
  description:
    "요청 내용을 명확히 정리한 뒤, 설계·운영·결과 공유까지 일관된 절차로 진행합니다.",
  steps: [
    {
      step: "01",
      title: "상담",
      description: "교육 목적, 대상, 일정, 예산 범위를 확인합니다.",
    },
    {
      step: "02",
      title: "설계",
      description: "주제, 커리큘럼, 강사진, 운영 방식을 제안합니다.",
    },
    {
      step: "03",
      title: "운영",
      description: "사전 준비부터 당일 진행까지 안정적으로 실행합니다.",
    },
    {
      step: "04",
      title: "피드백",
      description: "만족도·개선점을 정리해 결과와 후속 제안을 공유합니다.",
    },
  ],
} as const;
