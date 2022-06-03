import React from 'react'


const Dropdown = () => (
    <svg width="1em" height="1em" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="core-ui-select-caret-icon"><path d="M1.052 1.76L5.35 5.441a1 1 0 001.302 0l4.296-3.683c.705-.604.278-1.759-.65-1.759H1.703c-.928 0-1.355 1.155-.65 1.76z" fill="#393F70"></path></svg>
)
const DoubleArrowIcon = () => (
    <svg aria-hidden="true" data-prefix="fal" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-angle-double-right fa-w-10 fa-7x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17zm128-17l-117.8-116c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L255.3 256 153.1 356.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l117.8-116c4.6-4.7 4.6-12.3-.1-17z" class=""></path></svg>

)
// const CloseIcon = () => (
//     <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 20px; height: 20px;"><defs><path d="M12 10.586l5.293-5.293a1 1 0 011.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 11-1.414-1.414L10.586 12 5.293 6.707a1 1 0 011.414-1.414L12 10.586z" id="cross-button_svg__a"></path></defs><g fill="none" fill-rule="evenodd"><mask id="cross-button_svg__b" fill="#fff"><use xlink:href="#cross-button_svg__a"></use></mask><use fill="#42526E" fill-rule="nonzero" xlink:href="#cross-button_svg__a"></use><g mask="url(#cross-button_svg__b)" fill="#525252" fill-rule="nonzero"><path d="M0 24h24V0H0z"></path></g></g></svg>
// )

const CloseIcon = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      width: 20,
      height: 20,
    }}
    {...props}
  >
    <defs>
      <path
        d="m12 10.586 5.293-5.293a1 1 0 0 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 1.414-1.414L12 10.586z"
        id="close-button_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="close-button_svg__b" fill="#fff">
        <use xlinkHref="#close-button_svg__a" />
      </mask>
      <use fill="#42526E" fillRule="nonzero" xlinkHref="#close-button_svg__a" />
      <g mask="url(#close-button_svg__b)" fill="#525252" fillRule="nonzero">
        <path d="M0 24h24V0H0z" />
      </g>
    </g>
  </svg>
);



const DeleteIcon=()=>(
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M8.88981 4.13818H11.1182V4.51314H11.923V4.08569C11.9231 3.67085 11.5857 3.33333 11.1711 3.33333H8.83691C8.42228 3.33333 8.08496 3.67085 8.08496 4.08569V4.51314H8.88981V4.13818Z" fill="black"/>
<path d="M13.7815 7.7018H6.22654C6.01953 7.7018 5.85656 7.87839 5.87325 8.08479L6.50486 15.8949C6.54006 16.3308 6.90372 16.6666 7.34063 16.6666H12.6673C13.1042 16.6666 13.4679 16.3308 13.503 15.8947L14.1347 8.08479C14.1514 7.87839 13.9885 7.7018 13.7815 7.7018ZM8.05586 15.8336C8.04742 15.8341 8.03898 15.8344 8.03064 15.8344C7.81966 15.8344 7.64255 15.6701 7.62943 15.4567L7.23362 9.04508C7.21999 8.82322 7.38875 8.63228 7.61051 8.61865C7.83156 8.60522 8.02331 8.77357 8.03694 8.99554L8.43265 15.4072C8.44639 15.629 8.27762 15.8199 8.05586 15.8336ZM10.4109 15.432C10.4109 15.6542 10.2307 15.8343 10.0085 15.8343C9.78621 15.8343 9.60605 15.6542 9.60605 15.432V9.02026C9.60605 8.79799 9.78621 8.61783 10.0085 8.61783C10.2306 8.61783 10.4109 8.79799 10.4109 9.02026V15.432ZM12.7744 9.04396L12.3965 15.4556C12.384 15.6694 12.2066 15.8343 11.9952 15.8343C11.9872 15.8343 11.9792 15.8341 11.9712 15.8337C11.7493 15.8206 11.58 15.6302 11.5932 15.4083L11.971 8.99656C11.984 8.77469 12.1738 8.60542 12.3963 8.61855C12.6181 8.63157 12.7874 8.8221 12.7744 9.04396Z" fill="black"/>
<path d="M15.1733 6.45998L14.909 5.66774C14.8393 5.4589 14.6438 5.31801 14.4236 5.31801H5.58476C5.36463 5.31801 5.16901 5.4589 5.09943 5.66774L4.83515 6.45998C4.78419 6.61277 4.85051 6.76861 4.97431 6.84633C5.02477 6.87797 5.08448 6.89699 5.15009 6.89699H14.8583C14.924 6.89699 14.9838 6.87797 15.0341 6.84623C15.1579 6.76851 15.2242 6.61267 15.1733 6.45998Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="13.3333" height="13.3333" fill="white" transform="translate(3.3335 3.33333)"/>
</clipPath>
</defs>
</svg>

)

const SingleArrowIcon = (props) => (
  <svg
    aria-hidden="true"
    data-prefix="far"
    data-icon="greater-than"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    className="single-arrow-to-right_svg__svg-inline--fa single-arrow-to-right_svg__fa-greater-than single-arrow-to-right_svg__fa-w-10 single-arrow-to-right_svg__fa-7x"
    {...props}
  >
    <path
      fill="currentColor"
      d="M311.16 218.53 37.47 81.69c-7.9-3.95-17.52-.75-21.47 7.16L1.69 117.48c-3.95 7.9-.75 17.51 7.16 21.46L242.96 256 8.85 373.06c-7.9 3.95-11.11 13.56-7.16 21.46L16 423.15c3.95 7.9 13.56 11.11 21.47 7.16l273.68-136.84c5.42-2.71 8.84-8.25 8.84-14.31v-46.31c.01-6.07-3.41-11.61-8.83-14.32z"
    />
  </svg>
);



export {SingleArrowIcon, Dropdown, DoubleArrowIcon, DeleteIcon, CloseIcon  }