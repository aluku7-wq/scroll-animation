export const page_one = {
  hiden: { opacity: 0 },
  show: {
    opacity: [0, 1],
    transition: { duration: 1 },
  },
};

export const hero_sec_one = {
  show: {
    opacity: [0, 1],
    scale: [0.5, 1],
    transition: { duration: 1.5 },
  },
  hide: {
    opacity: [1, 0],
    scale: [1, 0.75],
  },
};
export const hero_sec_two = {
  show: {
    opacity: [0, 1],
    scale: [0.95, 1],
    y: [100, 0],
    transition: { delay: 1, duration: 1 },
  },
  hide: {
    opacity: [1, 0],
    scale: [1, 0.75],
  },
};
