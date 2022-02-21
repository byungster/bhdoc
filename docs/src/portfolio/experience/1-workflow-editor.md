# 플로우 차트 개발 경험기

## 무엇인가?

회사의 요구에 따라, 사용자에게 Flowchart를 만들고 관리하는 도구를 제공합니다.

:::tip 주요 기능
- Flowchart에 대한 생성/조회/수정/삭제 기능을 제공합니다.
- Flowchart의 구성 기호들에 대한 생성/조회/수정/삭제 기능을 제공합니다.
- Flowchart의 구성 기호들의 각 속성에 대한 생성/조회/수정/삭제를 제공합니다.
:::

아래는 주요 개발 항목에 대한 예시입니다.

### Flowchart <b>조회/삭제</b> 페이지
![](https://imgur.com/Io2eLWv.png)
목록페이지입니다.  
여기서 사용자는 자신이 만든 Flowchart를 조회하거나 삭제할 수 있습니다.

### Flowchart <b>생성</b> 페이지
![](https://imgur.com/TZL8nQo.png)
![](https://imgur.com/1TZ3bu8.png)
생성을 유도하는 Template List와 Preview 페이지입니다.  
여기서 사용자는 "Start from scratch 버튼" 또는 "Choose Template 버튼"을 눌러 Flowchart를 생성할 수 있습니다.

### Flowchart <b>수정</b> 페이지
![](https://imgur.com/nOf9QtD.png)
에디터페이지입니다.
플로우차트의 세부사항을 수정하는 페이지입니다.
세부사항은 "Flowchart 구성 기호"와 "Flowchart 구성 기호의 속성"입니다. 

### Flowchart 구성 기호의 조회/생성/삭제 기능
![](CellReadCreateDelete.git)
![](https://imgur.com/syYW517.png)
에디터페이지와 리포트페이지입니다.
에디터페이지에서는 Flowchart 구성 기호를 보거나 추가하거나 삭제할 수 있습니다.
리포트페이지에서는 각 구성요소에 대한 현재 상태를 파악할 수 있습니다.

### Flowchart 구성 기호의 수정 기능 + 속성에 대한 CRUD 기능
![](CellUpdate.git)
에디터페이지입니다.
에디터 페이지의 패널에서 Flowchart 구성 기호의 속성을 생성/수정/추가/삭제할 수 있습니다.
이로 인하여 Flowchart 구성 기호 또한 자동으로 수정됩니다.

## 주요 담당 업무 및 역할
위 언급한 페이지들을 개발하였고, 유지보수 중입니다.
