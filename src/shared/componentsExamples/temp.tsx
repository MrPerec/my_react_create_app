import React from 'react';

/** Классовый компонент можно объявить через React.Component */
class TempClassComponent extends React.Component {}

/** Так же классовый компонент можно объявить через React.PureComponent */
class TempClassPureComponent extends React.PureComponent {}

/** Компонент так же может быть функциональным и объявляется через функцию */
function TempFunctoin() {
  // возвращает разметку HTML
  return <div>Hello TempFunctoin!</div>;
}
