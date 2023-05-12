import React from "react";

const slides = [
    {
        title: "Reparaciónes",
        subtitle: "Urgentes",
        description: "Reparaciónes urgentes en 24 hrs",
        image:
            "https://www.serviciotecnicowhirlpoolcdmx.com.mx/centro_de_servicio_tecnico_whirlpool/servicio_tecnico_whirlpool_en_la_cdmx.jpg"
    },
    {
        title: "Reparación de",
        subtitle: "Linea Blanca",
        description: "Los mejores técnicos a tu disposición.",
        image:
            "https://i.postimg.cc/QNKTDCfD/lavadora.jpg"
    },
    {
        title: "Atención al cliente",
        subtitle: "24 hrs",
        description: "Ofrecemos una espectacular atención al cliente.",
        image:
            "https://www.centrodeserviciowhirlpoolenmexico.com.mx/centro_de_servicio_tecnico_whirlpool_cdmx/reparacion_de_refrigeradores_whirlpool_en_la_ciudad_de_mexico.jpg"
    },
    
    {
        title: "Garantía Por",
        subtitle: "ESCRITO",
        description: "Nosotros te brindamos garantía por escrito.",
        image:
            "https://i.postimg.cc/6Q5NV78G/garantia.png"
    },
    {
        title: "Asisténcia",
        subtitle: "Técnica",
        description: "Detallamos todos los desperfectos de su equipo.",
        image:
            "https://i.postimg.cc/wMj4tJMw/servicio.jpg"
    }
];

function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}

const initialState = {
    slideIndex: 0
};

const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
    }
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
};

function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
        >
            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide.image}')`
                }}
            >
                <div className="slideContentInner">
                    <h2 className="slideTitle">{slide.title}</h2>
                    <h3 className="slideSubtitle">{slide.subtitle}</h3>
                    <p className="slideDescription">{slide.description}</p>
                </div>
            </div>
        </div>
    );
}

function ComponentCarrousel() {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return (
        <div className="slides">
            <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

            {[...slides, ...slides, ...slides].map((slide, i) => {
                let offset = slides.length + (state.slideIndex - i);
                return <Slide slide={slide} offset={offset} key={i} />;
            })}
            <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
        </div>
    );
}

export default ComponentCarrousel;