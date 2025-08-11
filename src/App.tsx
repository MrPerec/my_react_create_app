import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './normalize.css';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { DropDown } from './shared/DropDown';

// 5
import { GenericList } from './GenericList/GenericList';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        {/* 1. Передаем в кнопку эл-т. Можем положить в DropDown какой-то список */}
        {/* <DropDown button={<button>Test</button>}>
            <ul>
              <li>1</li>
            </ul>
          </DropDown> */}

        {/* 2. можем положить готовую карточку */}
        {/* <DropDown button={<button>Test</button>}>
            <CardsList />
          </DropDown> */}

        {/* 3. если нужны элементы с кастомными хэндлерами можно объявить элементы с обработчиками, 
          при нажатии на 1й li в коносли появятся логи, 
          при нажатии на 2й li ничего не появится */}
        {/* <DropDown button={<button>Test</button>}>
            <ul>
              <li onClick={console.log}>Click me!</li>
              <li>Din't click me!</li>
            </ul>
          </DropDown> */}

        {/* 4. можем положить ранее созданый компонент для списков GenericList в котором можем генерировать каким будет наш список 
          GenericList утилитарный компонент, может рендерить любой список с любыми стилями 
          так же можно реализовывать анимацию с закрытием и открытием */}
        {/* <DropDown button={<button>Test</button>}>
            <GenericList
              list={[
                { id: `1`, text: `Hello list!` },
                { id: `2`, text: `Hello list!!` },
                { id: `3`, text: `Hello list!!!` },
              ]}
            />
          </DropDown> */}

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
          <GenericList
            list={[
              { id: `1`, text: `Hello list!` },
              { id: `2`, text: `Hello list!!` },
              { id: `3`, text: `Hello list!!!` },
            ]}
          />
        </DropDown>
      </Content>
    </Layout>
  );
}

export const App = hot(module)(() => <AppComponent />);
