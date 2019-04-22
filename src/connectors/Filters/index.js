import _ from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'luna-ui-lib'

import './styles.css'
import connector from './connector'

class Filters extends PureComponent {
  static propTypes = {
    filters: PropTypes.object,
    onChangeFilters: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.handleSearchChangeDebounce = _.debounce(this.handleSearchChangeDebounce.bind(this), 500)
  }

  changeFilters(filterType, filterParameter) {
    this.props.onChangeFilters(filterType, filterParameter)
  }

  isStarChecked(value) {
    return this.props.filters.stars.indexOf(parseInt(value)) > -1
  }

  getStarFilters() {
    return ['1', '2', '3', '4', '5'].map((index) => {
      return (
        <Form.Checkbox
          key={index}
          value={index}
          kind="primary"
          label={`${index} ★`}
          group="starRating"
          id={`starRating${index}`}
          config={{
            onClick: () => this.changeFilters('stars', parseInt(index)),
            className: "arw_filter__checkbox",
            checked: this.isStarChecked(index)
          }}
        />
      )
    })
  }

  handleSearchChangeDebounce(e) {
    if (!e.target.value.trim().length) return
    
    this.props.onChangeFilters('search', e.target.value)
  }

  handleSearchChange = (e) => {
    e.persist()
    this.handleSearchChangeDebounce(e)
  }

  refreshAllFilters(e) {
    e.preventDefault()
    this.props.onChangeFilters('ALL', this.props.filters)
  }

  render() {
    return (
      <form onSubmit={(e) => this.refreshAllFilters(e)}>
        <Form.InputText
          kind="primary"
          icon="search"
          config={{
            type:'text',
            placeholder: 'Search',
            defaultValue: this.props.filters.search,
            onChange: (e) => this.handleSearchChange(e)
          }}
        />

        <div className="arw_filter__group">
          <Form.Select
            kind="primary"
            className="arw_filter__group__column"
            config={{
              defaultValue: this.props.filters.groupBy,
              onChange: e => this.changeFilters('groupBy', e.target.value),
            }}>
            >
            <option value="day">Group by</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </Form.Select>

          <Form.Select
            kind="primary"
            className="arw_filter__group__column"
            config={{
              defaultValue: this.props.filters.order,
              onChange: e => this.changeFilters('order', e.target.value)
            }}>
            <option value="">Order by</option>
            <option value="+">Newest</option>
            <option value="-">Oldest</option>
          </Form.Select>
        </div>

        <div className="arw_filter__group arw_filter__secundary">
          <div className="arw_filter__group__column arw_filter__star">
            {this.getStarFilters()}
          </div>

          <div className="arw_filter__group__column arw_filter__button">
            <Button kind="primary">refresh</Button>
          </div>
        </div>
      </form>
    )
  }
}

export default connector(Filters)
