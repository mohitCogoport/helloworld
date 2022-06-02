import React from 'react'

const MoneySvg = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1V23" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

const UsersSvg = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

const ChartSvg=()=>(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.21 15.89C20.5738 17.3945 19.5788 18.7202 18.3119 19.7513C17.045 20.7824 15.5448 21.4874 13.9424 21.8048C12.3401 22.1221 10.6844 22.0421 9.12015 21.5718C7.55588 21.1014 6.13063 20.2551 4.96903 19.1067C3.80742 17.9582 2.94482 16.5428 2.45664 14.9839C1.96846 13.4251 1.86957 11.7705 2.1686 10.1646C2.46764 8.55878 3.1555 7.05063 4.17205 5.77203C5.1886 4.49343 6.50289 3.48332 8.00001 2.83" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V12H22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)

const ContainerSvg=()=>(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="5" width="20" height="14" rx="2" stroke="black" stroke-width="2"/>
<line x1="5.22727" y1="7.5" x2="5.22727" y2="16.5" stroke="black" stroke-linecap="round"/>
<line x1="7.95454" y1="7.5" x2="7.95454" y2="16.5" stroke="black" stroke-linecap="round"/>
<line x1="10.6818" y1="7.5" x2="10.6818" y2="16.5" stroke="black" stroke-linecap="round"/>
<line x1="13.4091" y1="7.5" x2="13.4091" y2="16.5" stroke="black" stroke-linecap="round"/>
<line x1="16.1364" y1="7.5" x2="16.1364" y2="16.5" stroke="black" stroke-linecap="round"/>
<line x1="18.8636" y1="7.5" x2="18.8636" y2="16.5" stroke="black" stroke-linecap="round"/>
</svg>
)

const StatsSvg=()=>(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 20V10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 20V14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

)


export {MoneySvg, UsersSvg, ChartSvg, ContainerSvg, StatsSvg}