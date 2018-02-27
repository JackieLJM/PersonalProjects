import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const ThemeContext = React.createContext("light");
class ThemeProvider extends React.Component {
  state = {
    theme: "light"
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>//在这里把state传给value,记得下面要把嵌套context consumer组件
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
const LanguageContext = React.createContext("en");
class LanguageProvider extends React.Component {
  state = {
    laguage: "en"
  };

  render() {
    return (
      <LanguageContext.Provider value={this.state.laguage}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
const initialState = {
  todos: []
};
const todos = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: state.todos.concat([action.text])
      };
    default:
      return state;
  }
};
function AppProviders({ children }) {
//这里的children是下层嵌套组件返回的，目的是在这个上层组件里面传值给下层组件，本来照常写法是传props，为了把consumer嵌套进来
  const store = createStore(todos, initialState);
  return (
    <Provider store={store}>
      <LanguageProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </LanguageProvider>
    </Provider>
  );
}
function ThemeAndLanguageConsumer({ children }) {
//这里也同样使用了children的传值方式，把下层HOC传递进来
  return (
    <LanguageContext.Consumer>
      {language => (//这里的language和theme的值来自顶层context provider的value
        <ThemeContext.Consumer>
          {theme => children({ language, theme })}//在这里把context的value值赋值给react-redux HOC组件，直接在children()里写值，在下层要使用这些值再手动赋值一次，才能成功传值
        </ThemeContext.Consumer>
      )}
    </LanguageContext.Consumer>
  );
}

const TodoList = props => (
  <div>
    <div>
      {props.theme} and {props.language}
    </div>
    {props.todos.map((todo, idx) => <div key={idx}>{todo}</div>)}
    <button onClick={props.handleClick}>add todo</button>
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  handleClick: () => ({
    type: "ADD_TODO",
    text: "Awesome"
  })
};

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TodoList
);

class App extends React.Component {
  render() {
    return (
      <AppProviders>
        <ThemeAndLanguageConsumer>
          {({ theme, language }) => (
            <ToDoListContainer theme={theme} language={language} />
          )}
        </ThemeAndLanguageConsumer>
      </AppProviders>
    );
  }
}

render(<App />, document.getElementById("root"));