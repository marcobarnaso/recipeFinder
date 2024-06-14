import React, { Component } from "react";
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from "semantic-ui-react";
import IngredientList from "./ingredientList";

export default class AccordionStandard extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { activeIndex } = this.state;
    return (
      <Accordion>
        <AccordionTitle
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          <a className="ui orange image label">
            <i className="spoon icon"></i>
            Ingredients
          </a>
          <Accordion />
        </AccordionTitle>
        <AccordionContent active={activeIndex === 0}>
          <IngredientList ingredients={this.props.ingredients} />
        </AccordionContent>

        <AccordionTitle
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          <a className="ui brown image label">
            <i className="clock outline icon"></i>
            Preparation
          </a>
        </AccordionTitle>
        <AccordionContent active={activeIndex === 1}>
          <a
            href={
              "https://www.youtube.com/results?search_query=" +
              this.props.ingredients.recipe.recipe.label +
              " preparation" 
            } target="_blank" rel="noopener noreferrer" 
          >
            <p>
              Click here to find a selection of videos to help you prepare this
              recipe.
            </p>
          </a>
        </AccordionContent>
      </Accordion>
    );
  }
}
