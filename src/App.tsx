import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import './normalize.css';
import './main.global.css';

import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList/CardsList';

import { GenericList, MyList } from './GenericList/GenericList';
import { generateRandomString } from './utils/react/generateRandomString'; //v1
// import { assignId } from './utils/react/generateRandomString'; //v2
import { generateId } from './utils/react/generateRandomString';
import { merge } from './utils/js/merge';

// const LIST = [{ text: `qqqq` }, { text: `wwww` }, { text: `wwww` }];
/** бонус v5 */
const LIST = [
  { As: 'li' as const, text: `qqqq` },
  { As: 'li' as const, text: `wwww` },
  { As: 'li' as const, text: `wwww` },
];

// const modifList = LIST.map((item) => ({ ...item, id: generateRandomString() })); //v1
// const modifList = LIST.map(assignId); //v2
const modifList = LIST.map(generateId);

function AppComponent() {
  /** теперь реализуем механизм удаления и добавления item из списка v4 */
  const [list, setList] = useState(modifList);
  const handleItemClick = (id: string) => setList(list.filter((item: { text: string; id: string }) => item.id !== id));
  // const handleAdd = () => setList(list.concat(generateId({ text: generateRandomString() })));
  /** бонус v5 */
  const handleAdd = () => setList(list.concat(generateId({ text: generateRandomString(), As: 'li' as const })));

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        {/* добавим уникальные handlerCkick для каждого эл-та в списке глобально */}
        {/* <MyList list={modifList} onClick={console.log} /> */}

        {/* укажем onClick в item v2 */}
        {/* <MyList list={modifList.map((item) => ({ ...item, onClick: () => console.log(item.id) }))} /> */}

        {/* теперь избавимся от стрелочной ф-ии что выше и перенесём её в "utils/js/merge.ts" v3 */}
        {/* {<MyList list={modifList.map(merge({ onClick: () => console.log('click') }))} />} */}

        {/** теперь реализуем механизм добавления и удаления item из списка v4 */}
        <button onClick={handleAdd}>Add</button>
        {/* {<MyList list={list.map(merge({ onClick: handleItemClick }))} />} */}

        {/* бонус v5 */}
        <GenericList list={list.map(merge({ onClick: handleItemClick }))} />
      </Content>
    </Layout>
  );
}

// export const App = hot(module)(AppComponent);

/** теперь реализуем механизм добавления и удаления item из списка v4 */
export const App = hot(module)(() => <AppComponent />);
