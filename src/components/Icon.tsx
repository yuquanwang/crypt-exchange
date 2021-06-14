import React, { SVGProps } from 'react'
import styled from 'styled-components'
import { ReactComponent as Audit } from '../assets/edit_circle.svg'
import { ReactComponent as Ball } from '../assets/ball.svg'
import { ReactComponent as BallActive } from '../assets/ball_active.svg'
import { ReactComponent as Bottle } from '../assets/bottle.svg'
import { ReactComponent as Box } from '../assets/package.svg'
import { ReactComponent as Circle } from '../assets/circle.svg'
import { ReactComponent as Comment } from '../assets/comment.svg'
import { ReactComponent as Deliver } from '../assets/deliver.svg'
import { ReactComponent as Edit } from '../assets/edit.svg'
import { ReactComponent as Home } from '../assets/home.svg'
import { ReactComponent as HomeActive } from '../assets/home_active.svg'
import { ReactComponent as IDCard } from '../assets/id_card.svg'
import { ReactComponent as IDCardActive } from '../assets/id_card_active.svg'
import { ReactComponent as Kit } from '../assets/basket.svg'
import { ReactComponent as KitActive } from '../assets/basket_active.svg'
import { ReactComponent as Location } from '../assets/location.svg'
import { ReactComponent as LocationActive } from '../assets/location_active.svg'
import { ReactComponent as Wait } from '../assets/delivery_slip.svg'
import { ReactComponent as Trank } from '../assets/trank.svg'
import { ReactComponent as ThumpActive } from '../assets/thumb_green.svg'
import { ReactComponent as Thump } from '../assets/thumb.svg'
import { ReactComponent as Temperature } from '../assets/temperature.svg'
import { ReactComponent as Talk } from '../assets/buble.svg'
import { ReactComponent as StarActive } from '../assets/star_active.svg'
import { ReactComponent as Star } from '../assets/star.svg'
import { ReactComponent as Share } from '../assets/share.svg'
import { ReactComponent as ScriptActive } from '../assets/list_plus_green.svg'
import { ReactComponent as Script } from '../assets/list_plus.svg'
import { ReactComponent as Play } from '../assets/play.svg'
import { ReactComponent as PhoneActive } from '../assets/phone_active.svg'
import { ReactComponent as Tick } from '../assets/check.svg'
import { ReactComponent as Face } from '../assets/smile.svg'
import { ReactComponent as Down } from '../assets/down.svg'
import { ReactComponent as PharmacyAuthed } from '../assets/cross_shield.svg'
import { ReactComponent as MedicalInsurance } from '../assets/cross_ring_green.svg'
import { ReactComponent as Modify } from '../assets/edit_ring_blue.svg'
import { ReactComponent as EditSqure } from '../assets/edit_squre.svg'
import { ReactComponent as Right } from '../assets/right.svg'
import { ReactComponent as Clear } from '../assets/clear.svg'
import { ReactComponent as Search } from '../assets/search.svg'


const Icon = (props: any) => {
  const resetProps = {
    fill: (props && props.theme && props.theme.colors.primary) || '',
    ...props
  }

  switch (props.type) {
    case 'audit': return <Audit {...resetProps} />
    case 'ball_active': return <BallActive {...resetProps} />
    case 'ball': return <Ball {...resetProps} />
    case 'bottle': return <Bottle {...resetProps} />
    case 'box': return <Box {...resetProps} />
    case 'circle': return <Circle {...resetProps} />
    case 'comment': return <Comment {...resetProps} />
    case 'deliver': return <Deliver {...resetProps} />
    case 'edit': return <Edit {...resetProps} />
    case 'home_active': return <HomeActive {...resetProps} />
    case 'home': return <Home {...resetProps} />
    case 'id_card_active': return <IDCardActive {...resetProps} />
    case 'id_card': return <IDCard {...resetProps} />
    case 'kit': return <Kit {...resetProps} />
    case 'kit_active': return <KitActive {...resetProps} />
    case 'location': return <Location {...resetProps} />
    case 'location_active': return <LocationActive {...resetProps} />
    case 'phone_active': return <PhoneActive {...resetProps} />
    case 'play': return <Play {...resetProps} />
    case 'script': return <Script {...resetProps} />
    case 'goToPrescription': return <ScriptActive {...resetProps} />
    case 'share': return <Share {...resetProps} />
    case 'star_active': return <StarActive {...resetProps} />
    case 'star': return <Star {...resetProps} />
    case 'talk': return <Talk {...resetProps} />
    case 'temperature': return <Temperature {...resetProps} />
    case 'thump_active': return <ThumpActive {...resetProps} />
    case 'thump': return <Thump {...resetProps} />
    case 'trank': return <Trank {...resetProps} />
    case 'wait': return <Wait {...resetProps} />
    case 'tick': return <Tick {...resetProps} />
    case 'face': return <Face {...resetProps} />
    case 'down': return <Down {...resetProps} />
    case 'pharmacy_authed': return <PharmacyAuthed {...resetProps} />
    case 'medical_insurance': return <MedicalInsurance {...resetProps} />
    case 'modify': return <Modify {...resetProps} />
    case 'edit_squre': return <EditSqure {...resetProps} />
    case 'right': return <Right {...resetProps} />
    case 'clear': return <Clear {...resetProps} />
    case 'search': return <Search {...resetProps} />

    default: return <Home {...resetProps} />
  }
}

export default Icon

const Container = styled.span`
  position: relative;
  display: inline-block;
  span {    
    position: absolute;
    background: ${props => props.theme.colors.red};
    font-size: ${props => props.theme.size.text - 0.4}rem;
    border-radius: 1em;
    padding: 1px 0.2em;
    top: -0.3em;
    left: 1em;
    color: #fff;
  }
`

export const TagIcon = (props: TagIconProps) => {
  return (
    <Container><Icon {...props} /><span>{props.value}</span></Container>
  )
}

export type IconType = 'audit' | 'ball_active' | 'ball' | 'bottle' | 'box' | 'circle' | 'comment'
  | 'deliver' | 'edit' | 'home_active' | 'home' | 'id_card_active' | 'id_card' | 'kit_active'
  | 'kit' | 'location_active' | 'location' | 'phone_active' | 'play' | 'script_active' | 'script'
  | 'share' | 'star_active' | 'star' | 'talk' | 'temperature' | 'thump_active' | 'thump' | 'trank'
  | 'wait' | 'tick' | 'face' | 'down' | 'pharmacy_authed' | 'medical_insurance' | 'modify'
  | 'edit_squre' | 'goToPrescription' | 'right' | 'clear' | 'search'


interface IconProps extends SVGProps<SVGSVGElement> {
  type: IconType
  size?: 'small' | 'large' | 'avatar'
}

interface TagIconProps extends IconProps {
  value: number
}


export const IconArrowGray = styled(Icon)`
      fill: #CCCCCC;
      vertical-align: -0.18em;
      margin-left: 0.3em;
`