export function printOwing(invoice) {
  printBanner(); // 배너 출력 로직을 함수로 추출
  let outstanding = calculateOutstanding(invoice); // 미해결 채무(outstanding)를 계산하는 로직을 함수로 추출
  recordDueDate(invoice); // 마감일 설정 로직을 함수로 추출
  printDetails(invoice, outstanding); // 세부 사항 출력 로직을 함수로 추출
}

function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  return outstanding;
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function printBanner() {
  console.log('***********************');
  console.log('**** 고객 채무 ****');
  console.log('***********************');
}

const Clock = {
	today: new Date(),
};
