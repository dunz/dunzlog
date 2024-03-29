---
title: '캘린더 직접 구현기'
date: '2022-12-03'
thumbnail: '/images/thumbnails/calendar.jpg'
tags: ['calendar', 'javascript']
featured: true
---

# 캘린더 직접 구현기

### Step.1 이번달 달력 데이터 구하기

> 지난달 날짜들, 현재달 날짜들, 다음달 날짜들 합쳐서 노출해주기

1. 지난달의 마지막 날짜와 요일 => 지난달 날짜들
   - new Date(2021, 9) => 10월의 1일, new Date(2021, 9, 0) => 9월의 마지막 날짜
2. 이번달의 마지막 날짜와 요일 => 다음달 날짜들
   - new Date(2021, 9+1) => 11월의 1일, new Date(2021, 9+1, 0) => 10월의 마지막 날짜

### Step.2 마크업 및 스타일 입히기

1. grid 기반의 마크업 하기
2. 이전달, 다음달 딤드 처리하기
3. 토요일(파), 일요일(빨) 다른 색상 지정하기
4. 오늘 날짜 표시하기

### Step.3 년도, 월 변경 기능 적용하기

1. 년도 바꾸기
2. 월 바꾸기

### Step.4 DatePicker 기능 구현하기

1. value, onChange 만들어서 외부와 통신하기
2. 선택한 날짜 스타일 주기
3. 선택한 날짜 이벤트 핸들러 연동하기

## Link

https://github.com/dunz/date-picker
