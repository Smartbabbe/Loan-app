// const scroll = (direction: 'left' | 'right') => {
//   if (scrollContainerRef.current) {
//     const scrollAmount = cardWidth + 22;
//     const newScrollLeft =
//       scrollContainerRef.current.scrollLeft +
//       (direction === 'left' ? -scrollAmount : scrollAmount);

//     scrollContainerRef.current.scrollTo({
//       left: newScrollLeft,
//       behavior: 'smooth',
//     });
//   }
// };

// const scroll = (direction: 'left' | 'right') => {
//   if (scrollContainerRef.current) {
//     const container = scrollContainerRef.current;
//     const scrollAmount = cardWidth + 22; // Card width plus gap

//     // Get the current scroll position
//     const currentScroll = container.scrollLeft;

//     // if (direction === 'right') {
//     // Find the next card that should be fully visible

//     const visibleRightEdge =
//       direction === 'left'
//         ? currentScroll - scrollAmount
//         : currentScroll + scrollAmount;

//     // Calculate the position of the next card that should be fully visible
//     const cardPositions = Array.from(container.children).map(
//       (child, index) =>
//         (direction === 'left' ? -scrollAmount : scrollAmount) * index
//     );

//     console.log(cardPositions);
//     console.log(visibleRightEdge);

//     // Find the first card position that's beyond the current visible area
//     const nextCardPosition =
//       cardPositions.find((position) =>
//         direction === 'left'
//           ? position < visibleRightEdge + 30
//           : position > visibleRightEdge - 30
//       ) || 0;

//     console.log(nextCardPosition);

//     // Scroll to that position
//     container.scrollTo({
//       left: nextCardPosition,
//       behavior: 'smooth',
//     });
//     // } else {
//     //   // Similar logic for left scrolling
//     //   const containerWidth = container.clientWidth;

//     //   // Find the previous card that should be fully visible
//     //   const cardPositions = Array.from(container.children[0].children).map(
//     //     (child, index) => (cardWidth + 22) * index
//     //   );

//     //   // Find the last card position that's before the current visible area
//     //   const prevCardPositions = cardPositions.filter(
//     //     (position) => position < currentScroll - 30
//     //   );
//     //   const prevCardPosition = prevCardPositions.length
//     //     ? prevCardPositions[prevCardPositions.length - 1]
//     //     : 0;

//     //   // Scroll to that position
//     //   container.scrollTo({
//     //     left: prevCardPosition,
//     //     behavior: 'smooth',
//     //   });
//     // }
//   }
// };

// const scroll = (direction: 'left' | 'right') => {
//   if (scrollContainerRef.current) {
//     const container = scrollContainerRef.current;
//     const scrollAmount = cardWidth + 22; // Card width plus gap

//     // Get the current scroll position
//     const currentScroll = container.scrollLeft;

//     if (direction === 'right') {
//       const visibleRightEdge = currentScroll + scrollAmount;

//       // Calculate the position of the next card that should be fully visible
//       const cardPositions = Array.from(container.children).map(
//         (child, index) => scrollAmount * index
//       );

//       // Find the first card position that's beyond the current visible area
//       const nextCardPosition =
//         cardPositions.find((position) => position > visibleRightEdge - 30) ||
//         0;

//       // Scroll to that position
//       container.scrollTo({
//         left: nextCardPosition,
//         behavior: 'smooth',
//       });
//     } else {
//       const visibleLeftEdge = currentScroll;

//       // Calculate the position of the previous card that should be fully visible
//       const cardPositions = Array.from(container.children).map(
//         (child, index) => (cardWidth + 22) * index
//       );

//       // Find the last card position that's before the current visible area
//       const previousCardPosition = cardPositions
//         .reverse()
//         .find((position) => position < visibleLeftEdge - 30);

//       // If we found a previous position, scroll to it, otherwise scroll to the beginning
//       const targetPosition =
//         previousCardPosition !== undefined ? previousCardPosition : 0;

//       // Scroll to that position
//       container.scrollTo({
//         left: targetPosition,
//         behavior: 'smooth',
//       });
//     }
//   }
// };
