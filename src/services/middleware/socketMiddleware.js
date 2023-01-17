import { getToken } from "../../utils/auth";

export function socketMiddleware(url, actions, isLogin = false) {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } =
        actions;

      const token = getToken();

      if (type === wsInit) {
        console.log("hey nnaaaaa")
        socket = !isLogin
          ? new WebSocket(url)
          : new WebSocket(`${url}?token=${token}`);
        
        // function that is called when opening a socket
        socket.onopen = (event) => {
          console.log("hey nnaaaaa")
          dispatch({ type: onOpen, payload: event });
        };
        // error connection
        socket.onerror = (event) => {
          console.log("hey nnaaaaa")
          dispatch({ type: onError, payload: event });
        };
        // receiving event from server
        socket.onmessage = (event) => {
          console.log("hey nnaaaaa")
          let { data } = event;
          data = JSON.parse(data);
          dispatch({ type: onMessage, payload: data });
        };
        // close connecting
        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
      } else if (type === onClose && socket) {
        socket.close();
      }

      if (socket) {
        if (type === wsSendMessage) {
          const message = payload;
          // sending message to server
          socket.send(JSON.stringify(message));
        }
      }
      next(action);
    };
  };
}
