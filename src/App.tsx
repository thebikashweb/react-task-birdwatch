import React from "react"

import BirdCard from "./components/BirdCard"

import "./App.css"

export type BirdDataType = {
	id: number
	name: String
	info: String
	rarity: "common" | "rare" | "extremely rare"
	date: number
}
type BirdListType = Array<BirdDataType>

function App() {
	const [isFormOpen, setIsFormOpen] = React.useState(false)

	// bird list data
	const [birdList, setBirdList] = React.useState<BirdListType>([])

	//GET DATA FROM LOCAL STORAGE
	const getDataFromLocal = () => {
		let _data = localStorage.getItem("birdData")
		if (_data) {
			return JSON.parse(_data)
		} else return null
	}
	React.useEffect(() => {
		const _data = getDataFromLocal()
		if (_data) {
			setBirdList(_data)
		}
	}, [])

	//single bird data
	const [singleBird, setSingleBird] = React.useState<BirdDataType>({
		id: Math.floor(Math.random() * 1000 + 1),
		name: "",
		info: "",
		rarity: "common",
		date: Date.now(),
	})

	//handle remove function
	const handleRemove = (id: number) => {
		const _birdList = birdList.filter((bird) => bird.id !== id)
		setBirdList(_birdList)
	}

	//save item to local storage
	const storeToLocalStorage = (data: BirdListType) => {
		localStorage.setItem("birdData", JSON.stringify(data))
	}

	//handle save data
	const handleSave = (e: any) => {
		e.preventDefault()
		let _birdList = [...birdList]
		_birdList.push({...singleBird, id: Math.floor(Math.random() * 1000 + 1)})
		setBirdList(_birdList)
		//save it in localstorage
		storeToLocalStorage(_birdList)
	}

	//handle input data
	const handleInputChange = (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const _singleBird = {...singleBird} as any
		_singleBird[event.target.name] = event.target.value
		setSingleBird(_singleBird)
	}

	return (
		<div className="App">
			<h2>Bird Watch App</h2>

			{isFormOpen && (
				<form id="form" className="form" onSubmit={handleSave}>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							required
							placeholder="species name.."
							name="name"
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="name">Info</label>
						<textarea
							required
							placeholder="Give some information..."
							name="info"
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label> Select the rarity type:</label>
						<div className="radio-options">
							<div className="radio-input">
								{" "}
								<input
									type="radio"
									name="rarity"
									value="common"
									required
									onChange={handleInputChange}
								/>{" "}
								Common
							</div>
							<div className="radio-input">
								<input
									type="radio"
									name="rarity"
									value="rare"
									required
									onChange={handleInputChange}
								/>{" "}
								Rare
							</div>
							<div className="radio-input">
								<input
									type="radio"
									name="rarity"
									value="extremely rare"
									required
									onChange={handleInputChange}
								/>{" "}
								Extremely rare
							</div>
						</div>
						<div className="form-buttons">
							<input type="submit" className="button CTA" value="Save" />
							<button onClick={() => setIsFormOpen(false)} className="button">
								Close
							</button>
						</div>
					</div>
				</form>
			)}
			{!isFormOpen && (
				<div className="form">
					<div className="form-buttons">
						<button onClick={() => setIsFormOpen(true)} className="button CTA">
							Add a brid info
						</button>
					</div>
				</div>
			)}

			{/** Bird list items */}
			<div className="bird-list">
				{birdList?.map((bird) => (
					<BirdCard key={bird.id} {...bird} onRemove={handleRemove} />
				))}
			</div>
		</div>
	)
}

export default App
