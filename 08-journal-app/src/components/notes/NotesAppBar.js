import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

export const NotesAppBar = () => {
  moment.locale('es');
  const date = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

  return (
    <div className="notes__appbar">
      <span>{date}</span>

      <div>
        <button className="btn">Picture</button>

        <button className="btn">Save</button>
      </div>
    </div>
  );
};
