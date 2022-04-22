import React from "react"
import moment from "moment"

import {BirdDataType} from "../App"

interface BirdCardProps extends BirdDataType {
	onRemove: Function
}

const BirdCard: React.FC<BirdCardProps> = ({
	id,
	name,
	info,
	date,
	rarity,
	onRemove,
}) => {
	return (
		<div className="bird-card">
			<div className="card-header">
				<div className="name-time">
					<div className="name">{name}</div>
					<div className="date-added">{moment(date).fromNow()}</div>
				</div>
				<div className={`rarity-type ${rarity}`}>
					<p>{rarity}</p>
				</div>
			</div>

			<div className="note-info">
				Note: <p>{info}</p>
			</div>
			<button
				className="form-buttons"
				onClick={() => {
					if (window.confirm("Are you sure you want to delete this?"))
						onRemove(id)
				}}>
				Remove
			</button>
		</div>
	)
}

export default BirdCard
