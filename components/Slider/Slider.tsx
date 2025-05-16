'use client';

import { useRef, useState, useEffect } from 'react';

// interfaces
interface IProps {
  touch?: boolean;
  margin?: number;
  children: React.ReactNode;
}

const Slider: React.FC<IProps> = ({ margin, touch, children }) => {
  const startX = useRef<number>(0);
  const isDown = useRef<boolean>(false);
  const itemWidth = useRef<number>(0);
  const scrollLeftX = useRef<number>(0);
  const preventClick = useRef<boolean>(false);
  const movedDistance = useRef<number>(0);
  const navReferenceDiv = useRef<HTMLDivElement | null>(null);

  const [leftArrowDisabled, setLeftArrowDisabled] = useState<boolean>(true);
  const [rightArrowDisabled, setRightArrowDisabled] = useState<boolean>(false);

  /**
   * Configura la funcionalidad de scroll y los listeners de eventos en el contenedor de navegación.
   */
  useEffect(() => {
    const currentNav = navReferenceDiv.current!;

    /**
     * Actualiza el estado de los botones de flecha según la posición actual del scroll.
     */
    const updateButtons = () => {
      const { offsetWidth, scrollWidth, scrollLeft } = navReferenceDiv.current!;
      setLeftArrowDisabled(scrollLeft <= 0);
      setRightArrowDisabled(scrollWidth - Math.round(scrollLeft) <= offsetWidth + 1);
    };

    /**
     * Maneja el movimiento del mouse durante el arrastre.
     */
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown.current) return;
      const x = e.pageX - navReferenceDiv.current!.offsetLeft;
      const walk = x - startX.current;
      navReferenceDiv.current!.scrollLeft = scrollLeftX.current - walk;
      movedDistance.current = Math.abs(walk);
      preventClick.current = movedDistance.current > 5;
      updateButtons();
    };

    /**
     * Inicia el arrastre cuando se presiona el botón del mouse.
     */
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      isDown.current = true;
      startX.current = e.pageX - navReferenceDiv.current!.offsetLeft;
      scrollLeftX.current = navReferenceDiv.current!.scrollLeft;
      preventClick.current = false;
      movedDistance.current = 0;
      updateButtons();
    };

    /**
     * Finaliza el arrastre cuando se suelta el botón del mouse.
     */
    const handleMouseUp = () => {
      isDown.current = false;
    };

    /**
     * Finaliza el arrastre si el mouse sale del área del componente.
     */
    const handleMouseLeave = () => {
      isDown.current = false;
      preventClick.current = false;
    };

    /**
     * Actualiza el estado de los botones durante el scroll.
     */
    const handleScroll = () => {
      updateButtons();
    };

    /**
     * Previene los clics si el usuario ha hecho scroll con arrastre.
     */
    const handleClick = (e: MouseEvent) => {
      if (preventClick.current) {
        e.preventDefault();
      }
    };

    if (currentNav.children.length > 0) {
      const firstChild = currentNav.children[0] as HTMLElement;
      itemWidth.current = firstChild.offsetWidth + (margin ?? 0);
    }

    updateButtons();

    window.addEventListener('resize', updateButtons);
    currentNav.addEventListener('click', handleClick);
    currentNav.addEventListener('scroll', handleScroll);

    if (touch) {
      currentNav.addEventListener('mouseup', handleMouseUp);
      currentNav.addEventListener('mousedown', handleMouseDown);
      currentNav.addEventListener('mousemove', handleMouseMove);
      currentNav.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', updateButtons);
      currentNav.removeEventListener('click', handleClick);
      currentNav.removeEventListener('scroll', handleScroll);

      if (touch) {
        currentNav.removeEventListener('mouseup', handleMouseUp);
        currentNav.removeEventListener('mousedown', handleMouseDown);
        currentNav.removeEventListener('mousemove', handleMouseMove);
        currentNav.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [touch, margin]);

  /**
   * Realiza el desplazamiento horizontal del contenedor.
   */
  const handleHorizontalScroll = (direction: 'left' | 'right') => {
    const scrollAmount = direction === 'left' ? -itemWidth.current : itemWidth.current;

    navReferenceDiv.current!.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });

    const { offsetWidth, scrollWidth, scrollLeft } = navReferenceDiv.current!;
    setLeftArrowDisabled(scrollLeft <= 0);
    setRightArrowDisabled(scrollWidth - Math.round(scrollLeft) <= offsetWidth + 1);
  };

  return (
    <div className='scroll-container'>
      {!leftArrowDisabled && (
        <div className='left-arrow'>
          <button
            type='button'
            disabled={leftArrowDisabled}
            onClick={() => handleHorizontalScroll('left')}
            className={`button-circle ${leftArrowDisabled ? 'button-gray' : 'button-default'}`}
          >
            <span className='material-symbols-outlined'>chevron_left</span>
          </button>
        </div>
      )}
      <div className='scrollable' ref={navReferenceDiv}>
        {children}
      </div>
      {!rightArrowDisabled && (
        <div className='right-arrow'>
          <button
            type='button'
            disabled={rightArrowDisabled}
            onClick={() => handleHorizontalScroll('right')}
            className={`button-circle ${rightArrowDisabled ? 'button-gray' : 'button-default'}`}
          >
            <span className='material-symbols-outlined'>chevron_right</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
