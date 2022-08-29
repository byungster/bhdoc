# 1. 플로우차트 에디터 (2020.10 ~ 현재)

사용자에게 제공할 Flowchart 제작도구를 개발합니다.

:::tip 주요 기능
- Flowchart에 CRUD
- Flowchart의 Cell(구성 요소)들에 대한 CRUD
- Flowchart의 Cell의 속성 값 CRUD
:::

## Flowchart List
![](https://imgur.com/Io2eLWv.png) 
여기서 사용자는 자신이 만든 Flowchart를 조회하거나 삭제할 수 있습니다.

## Flowchart Template
![](https://imgur.com/TZL8nQo.png)
![](https://imgur.com/1TZ3bu8.png)
생성을 유도하는 Template List와 Preview 페이지입니다.  
여기서 사용자는 "Start from scratch 버튼" 또는 "Choose Template 버튼"을 눌러 Flowchart를 생성할 수 있습니다.

## Flowchart Editor
![](https://imgur.com/nOf9QtD.png)
에디터페이지입니다.
플로우차트의 세부사항을 수정하는 페이지입니다.
세부사항은 "Flowchart 구성 기호"와 "Flowchart 구성 기호의 속성"입니다. 

#### Flowchart 각 Cell CRUD 기능
![](CellReadCreateDelete.git)
![](https://imgur.com/syYW517.png)
에디터페이지와 리포트페이지입니다.
에디터페이지에서는 Flowchart 구성 기호를 보거나 추가하거나 삭제할 수 있습니다.
리포트페이지에서는 각 구성요소에 대한 현재 상태를 파악할 수 있습니다.

#### Flowchart Cell의 속성 값 CRUD
![](CellUpdate.git)
에디터페이지입니다.
에디터 페이지의 패널에서 Flowchart 구성 기호의 속성을 생성/수정/추가/삭제할 수 있습니다.
이로 인하여 Flowchart 구성 기호 또한 자동으로 수정됩니다.

