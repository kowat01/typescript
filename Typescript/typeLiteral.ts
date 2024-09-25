type angryDepth = 1 | 2 | 3 | 4 | 5;
const d1: angryDepth = 5;

type jobType = "전사" | "마법사" | "궁수" | "도적";

const d2: { id: string; level: number; job: jobType } = {
  id: "1234",
  level: 100,
  job: "전사",
};
type hambuger = "불고기버거" | "새우버거" | "치킨버거" | "빅맥" | "상하이버거";
type side = "치즈스틱" | "감자튀김" | "콘솔로우" | "해쉬브라운";
type drinks = "제로콜라" | "콜라" | "환타" | "스프라이트" | "제로스프라이트";
type setMenu = { main: string; side: string; drinks: string };

const myMacdonald: setMenu = {
  main: "빅맥",
  side: "감자튀김",
  drinks: "제로콜라",
};

type bread =
  | "화이트"
  | "하티"
  | "파마산오레가노"
  | "위트"
  | "허니오트"
  | "플랫브레드";
type main = "페페로니" | "포크" | "베이컨" | "살라미" | "미트" | "에그";
type cheese = "아메리칸" | "모짜렐라" | "슈레드";
type vegetable = "올리브" | "양상추" | "할라피뇨" | "양파" | "아보카도";
type sorce1 =
  | "스위트 어니언"
  | "핫칠리"
  | "스위트칠리"
  | "허니머스타드"
  | "레드와인 식초";
type sorce2 = "소금" | "후추";
type subway = {
  bread: string;
  main: string;
  cheese: string;
  vegetable: string;
  sorce1: string;
  sorce2: string;
};

const sandwich: subway = {
  bread: "화이트",
  main: "페페로니",
  cheese: "슈레드",
  vegetable: "올리브",
  sorce1: "핫칠리",
  sorce2: "후추",
};
