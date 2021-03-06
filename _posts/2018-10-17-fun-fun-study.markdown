---
layout: post
title: 함수형 프로그래밍 스터디 세미나 (fun-fun-study)
date: 2018-10-17 21:20:00 +0300
description: 함수형 프로그래밍 세미나 정리
img: funfun.jpg # Add image post (optional)
tags: [Functional, Programming] # add tag
---

오랜만에 외부 세미나를 참여하게 됐습니다.

주제는 함수형 프로그래밍 스터디 첫 외부 세미나 라고 하네요.

평소 관심이 많았지만 어느정도 선 이상으로 사용하지 않는 내 자신에 자극을 심어주고자
참여하게 되었습니다!

세미나 내용을 정리해 보았습니다.

## 1. 함수형 프로그래밍이란? (with 코틀린) - 김규하
- 순수함수
  - 함수에 주어진 인자값만 가지고 실행되는 함수
  - 외부 변수를 직접 접근하지 않는 함수
  
- 순수하지 못한 함수
  - 그 반대
  
- 불변성
  >  한 번 할당된 값을 변경하지 않는 것
  - 장점: 
    - 부수 효과가 없다
    - 프로그램의 복잡도가 낮아진다
    - 멀티 쓰레딩 환경에서의 개발에 용이하다
    
- 일급함수
  - 함수를 변수나 데이터 구조에 담을 수 있다
  - 함수를 파라미터로 전달할 수 있다
  - 함수를 반환값으로 사용할 수 있다
  
- 고차함수
  - 파라미터에 함수가 넘어오는 함수
  - 반환하는 값이 함수인 함수
  
#### 함수형 프로그래밍의 장단점
- 함수형 프로그래밍의 장점
  - 변하지 않는 값
  - 결과가 예측 가능한 순수한 함수
  - 적은 사이드 이펙트
  - 높은 추상화로 간결해진 코드
 
- 함수형 프로그래밍의 단점
  - 러닝커브
  - 레퍼런스가 부족하다
   - 지나치게 높은 추상화가 가독성을 해칠 수 있다
   
## 2. Gootbye Null - 우명인
#### null의 문제점
- NullPointException = NPE

#### 어떻게 npe를 회피할까
- 명령형 프로그래밍 회피
- 추상화를 통한 회피
- 언어적 회피(kotlin)
- fp적 회피

##### 명령형 프로그래밍 회피
```js
if(dog !== null) {
    var name = dog.name
}
```
> if문 처리 (코드가 지저분해지고 가독성이 떨어지며 코드량이 늘어남)

##### 추상화를 통한 회피
> 추상 클래스를 만들고 isNull 처리

- runtime 에러만 막아주는 정도의 처리
- npe는 회피하지만 의미 없는 값을 생산한다
- nonNull을 의미하는 값에 접근을 하려면 어차피 null check를 해야 한다

##### 언어적 회피(kotlin)
```kotlin
val name = dog?.name?:'default'
```
- nullable type(?) 제공
- 런타임에 npe를 차단할수 잇다
- 가독성이 좋다

##### FP적 회피(with Java)
```java
String name = findPersonByName('asdf')
    .flatMap(Person::getDog)
    .flatMap(Dog::getSomething)
    .map((somthing) -> somthing.name)
    .orElse('default')
```
- flatMap
- Map
- npe가 발생하지 않고 가독성이 좋다
- Optional을 재사용 할 수 있다

## 3. 요가레슨 with ARCore - 조은실(kotlin)
ARCore - 증강현실 환경 구현을 위한 플랫폼
> 구글의 ARCore(aos 7.0 이상, ios 11  이상) vs 애플의 ARKit(ios 11 이상)

#### 가상현실 & 증강현실
- 가상현실 (Virtual reality, VR) - 100% 가상의 화면
- 증강현실 (Augmented reality, AR) - 현실세계와 가상의 물체가 접목됨 

#### 증강현실 기본개념
- 모션 추적
- 환경 이해
- 조명 추정

## Conclusion
kotlin과 java기준으로 설명이 되어 있어서 언어적 생소함은 조금 있었지만

대부분 언어들이 그렇듯 개념은 비슷하기에 이해하는데 큰 어려움은 없었습니다.

javascript 단에서의 fp적 처리라 함은
```js
const name = (dog ? dog : {}).name;
```
이런식의 default 세팅 처리를 해 줄 수 있겠고, 더 나아가 추상화된 함수들의 조합으로 고도화 할 수 있을 것 같습니다.

첫 포스팅으로 세미나 정리 자료였고

앞으로 좀 더 전문적인 나의 생각과 코드들을 포스팅해 보고자 합니다.

발표하신분들의 노고에 감사를 드립니다 (--)(__)

