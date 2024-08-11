export function changeViewIndex(index: number) {
  return {
    start: {
      x: index * 81,
    },
    move: {
      x: index * 81,
      transition: {
        ease: 'linear',
      },
    },
  };
}

export function sidebarAnimation(side: boolean) {
  return {
    hidden: {
      x: side ? -300 : 300,
      transition: {
        ease: 'linear',
      },
    },
    show: {
      x: 0,
      transition: {
        ease: 'linear',
      },
    },
  };
}
