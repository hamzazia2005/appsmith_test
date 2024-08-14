export default {
	updateMovies () {
		if(moviesTable.updatedRows.length) {
			const updates = moviesTable.updatedRows.map(i =>  updateMany.run(i.allFields))
			return Promise.all(updates).then(() => {
				getMovies.run()
				showAlert("Values updated", "success")
			}).catch(err => console.log("error in update many", err))
		} else {
			showAlert("Nothing to update", "error")
		}
	},
	
	setValuesInModal () {
		Input1.setValue(moviesTable.selectedRow.title)
		Input2.setValue(moviesTable.selectedRow.imdb_id)
		DatePicker1.setValue(moviesTable.selectedRow.release_date)
		Input3.setValue(moviesTable.selectedRow.vote_average)
		Input4.setValue(moviesTable.selectedRow.vote_count)
		Input5.setValue(moviesTable.selectedRow.status)
		Input6.setValue(moviesTable.selectedRow.revenue)
		Input7.setValue(moviesTable.selectedRow.runtime)
		Input8.setValue(moviesTable.selectedRow.backdrop_path)
		Input9.setValue(moviesTable.selectedRow.budget)
		Input10.setValue(moviesTable.selectedRow.homepage)
		Input11.setValue(moviesTable.selectedRow.original_language)
		Input12.setValue(moviesTable.selectedRow.original_title)
		Input13.setValue(moviesTable.selectedRow.popularity)
		Input14.setValue(moviesTable.selectedRow.poster_path)
		Input15.setValue(moviesTable.selectedRow.genres)
		Input16.setValue(moviesTable.selectedRow.tagline)
		Input17.setValue(moviesTable.selectedRow.production_companies)
		Input18.setValue(moviesTable.selectedRow.production_countries)
		Input19.setValue(moviesTable.selectedRow.keywords)
		Input20.setValue(moviesTable.selectedRow.spoken_languages)
		Checkbox1.setValue(moviesTable.selectedRow.adult)
	}
	
}