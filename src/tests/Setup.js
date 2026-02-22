import "@testing-library/jest-dom";
class IntersectionObserverMock {
  constructor() {}

  observe() {
    return null;
  }

  unobserve() {
    return null;
  }

  disconnect() {
    return null;
  }
}

global.IntersectionObserver = IntersectionObserverMock;