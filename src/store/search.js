import _ from 'lodash'
import resultsData from '@/mock-data/results.json'
import { levenshteinDistance } from '@/helpers/'

export default {
  namespaced: true,

  state: {
    tours: resultsData.tours,
  },

  actions: {

  },

  getters: {
    allToursTitles (state) {
      return state.tours.map(tour => tour.title)
    },

    mainTerms (state) {
      const toursTitles = state.tours
        .map(tour => tour.title.replace(/:|,/g, '').split(' '))
      let toursWords = [].concat.apply([], toursTitles)
      toursWords = _.remove(toursWords, (word) => {
        const blackList = ['the', '&amp;', 'with', 'Skip', 'Line']
        return !blackList.includes(word)
      })
      const toursWordsCount = _.countBy(toursWords)
      const toursWordsCountArr = Object.keys(toursWordsCount)
        .map(key => ({
          key,
          count: toursWordsCount[key],
        }))
      const toursWordsCountArrSorted = _.orderBy(toursWordsCountArr, ['count'], ['desc'])
      return toursWordsCountArrSorted
    },

    search (state) {
      return queryTerm => state.tours.filter(tour => {
        const distance = levenshteinDistance(queryTerm, tour.title)
        const length = tour.title.length
        const similarity = 100 - (distance * 100 / length)
        return similarity > 10
      })
        .map(tour => {
          const tourWithHilight = tour
          const hilighted = tour.title
            .split(' ')
            .map(word => {
              let wordHilighted = word
              const distance = levenshteinDistance(queryTerm, word)
              if (distance <= 2) {
                const searchRegex = new RegExp('(' + wordHilighted + ')', 'ig')
                wordHilighted = wordHilighted.replace(searchRegex, `<b class='is-fake-bold'>$1</b>`)
              }
              return wordHilighted
            })
            .join(' ')

          tourWithHilight.hilighted = hilighted
          return tourWithHilight
        })
    },
  },

  mutations: {

  },
}
