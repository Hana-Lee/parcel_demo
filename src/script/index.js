import $ from 'jquery';
import TeamworkApp from './app';

$(() => {
  const ta = new TeamworkApp();
  console.log(ta.getName());
});
