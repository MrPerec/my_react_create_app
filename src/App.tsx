import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './normalize.css';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { DropDown } from './shared/DropDown';
import { GenericList } from './GenericList/GenericList';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <div style={{ padding: '40px' }}>
          <br />
          {/* v1 */}
          {/* <DropDown button={<button>Test</button>}> */}
          {/* 1. можем положить в DropDown какой-то список */}
          {/* <ul>
              <li>1</li>
            </ul> */}

          {/* 2. можем положить готовую карточку */}
          {/* <CardsList /> */}

          {/* 3. можем положить список с какой-то логикой нажатия */}
          {/* <ul>
              <li onClick={console.log}>Click me!</li>
              <li>Din't click me!</li>
            </ul> */}

          {/* 4. можем положить ранее созданый компонент для списков GenericList 
              в котором можем генерировать каким будет наш список */}
          {/* <GenericList list={[{ id: `1`, text: `Hello list!` }]} /> */}
          {/* </DropDown> */}

          {/* 5. контролируемый и неконтролируемый компонент 
            На примере input: 
            - Если у него есть value и я могу управлять содержимым то он контролируемы и что бы
            управлять им нужно состояние, нужен handler на onChange передоавать его в Input.
            <input type='text' value={''} />
            - Если нет value то компонент живёт сам по себе и сам контролирует содержимое value
            <input type='text' />
            Сделаем DropDown контролируемым
          */}

          <DropDown isOpen={false} onOpen={() => console.log('Opened')} onClose={() => console.log('Closed')} button={<button>Test</button>}>
            <GenericList list={[{ id: `1`, text: `Hello list!` }]} />
          </DropDown>
        </div>
      </Content>
    </Layout>
  );
}

export const App = hot(module)(() => <AppComponent />);
