import { getRawToken } from "../../utils/auth";

export function socketMiddleware(url, actions, isLogin = false) {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } =
        actions;

      const token = getRawToken();

      if (type === wsInit) {
        socket = !isLogin
          ? new WebSocket(url)
          : new WebSocket(`${url}?token=${token}`);
        // function that is called when opening a socket
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };
        // error connection
        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };
        // receiving event from server
        socket.onmessage = (event) => {
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
