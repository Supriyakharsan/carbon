import TableRow from './';
import Definition from './../../../../demo2/utils/definition';

let definition = new Definition('table-row', TableRow, {
  propTypes: {
    as: "String",
    hideMultiSelect: "Boolean",
    highlightable: "Boolean",
    highlighted: "Boolean",
    onHighlight: "Function",
    onSelect: "Function",
    selectAll: "Boolean",
    selectable: "Boolean",
    selected: "Boolean",
    uniqueID: "String",
  },
  propDescriptions: {
    as: "Defines what this row is for. For your header row set this to 'header' to ensure it behaves correctly.",
    hideMultiSelect: "Option to hide the checkbox for a row that is selectable. Useful if you have set your table to be selectable but you do not want a particular row to be selectable.",
    highlightable: "Controls if this particular row is highlightable.",
    highlighted: "Controls the highlighted state of the row.",
    onHighlight: "Triggered when a row is highlighted.",
    onSelect: "Triggered when a row is selected.",
    selectAll: "Defines if the row's checkbox should be used to select all rows.",
    selectable: "Controls if this particular row is selectable.",
    selected: "Controls the selected state of the row.",
    uniqueID: "A unique ID should be provided if using selectable/highlightable rows - this is used to track the selected/highlighted as rows are unmounted from the DOM.",
  }
});

export default definition;