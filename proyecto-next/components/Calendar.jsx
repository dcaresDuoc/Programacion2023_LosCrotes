import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Dialog, Button, TextField } from '@mui/material';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export const MyCalendar = ({ onSelectedHours }) => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [openSlot, setOpenSlot] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [clickedEvent, setClickedEvent] = useState(null);
  const [totalHours, setTotalHours] = useState(0);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleClose = () => {
    setStart(null);
    setEnd(null);
    setTotalHours(0); // Cambia `null` a `0` para reiniciar el total de horas
    setOpenSlot(false);
    setOpenEvent(false);
    setConfirmDelete(false)
  };

  const handleSlotSelected = (slotInfo) => {
    setStart(slotInfo.start);
    setEnd(slotInfo.end);
    setOpenSlot(true);
    calculateTotalHours(slotInfo.start, slotInfo.end);
  };

  const handleEventSelected = (event) => {
    setClickedEvent(event);
    setStart(event.start);
    setEnd(event.end);
    setTitle(event.title);
    setDesc(event.desc);
    setOpenEvent(true);
    calculateTotalHours(event.start, event.end);
  };

  const handleStartTimeChange = (e) => {
    const time = moment(e.target.value, 'HH:mm');
    const startTime = moment(start).set({ hour: time.hours(), minute: time.minutes() });
    setStart(startTime);
    calculateTotalHours(startTime, end);
  };

  const handleEndTimeChange = (e) => {
    const time = moment(e.target.value, 'HH:mm');
    const endTime = moment(end).set({ hour: time.hours(), minute: time.minutes() });
    setEnd(endTime);
    calculateTotalHours(start, endTime);
  };

  const setNewAppointment = () => {
    const appointment = { title, start, end, desc };
    setEvents([...events, appointment]);
    handleClose();
  };

  const updateEvent = () => {
    const updatedEvents = events.map((event) => {
      if (event === clickedEvent) {
        return { ...event, title, desc, start, end };
      }
      return event;
    });
    setEvents(updatedEvents);
    handleClose();
  };

  const deleteEvent = () => {
    const updatedEvents = events.filter((event) => event.start !== start);
    setEvents(updatedEvents);
    handleClose(); // Agrega esta línea para cerrar el diálogo después de eliminar el evento
  };

  const showConfirmDelete = () => {
    setConfirmDelete(true);
  };

  const eventActions = [
    <Button key="cancel" onClick={handleClose}>
      Cancel
    </Button>,
    <Button key="delete" color="error" onClick={showConfirmDelete}>
      Delete
    </Button>,
    <Button key="confirm" onClick={updateEvent}>
      Confirm Edit
    </Button>,
  ];

  const appointmentActions = [
    <Button key="cancel" color="error" onClick={handleClose}>
      Cancel
    </Button>,
    <Button key="submit" onClick={setNewAppointment}>
      Submit
    </Button>,
  ];

  const weekStart = moment().set({ hour: 8, minute: 0 });
  const weekEnd = moment().set({ hour: 20, minute: 0 });

  const calculateTotalHours = (startTime, endTime) => {
    if (startTime && endTime) {
      const startHour = moment(startTime).hour();
      const endHour = moment(endTime).hour();
      const startLimit = 8;
      const endLimit = 20;
  
      // Verificar si la hora de inicio está dentro del rango permitido
      const adjustedStartTime = moment(startTime).hour(Math.max(startHour, startLimit));
  
      // Verificar si la hora de finalización está dentro del rango permitido
      const adjustedEndTime = moment(endTime).hour(Math.min(endHour, endLimit));
  
      // Calcular la diferencia de tiempo ajustada en minutos
      const duration = moment.duration(adjustedEndTime.diff(adjustedStartTime));
      const minutes = duration.asMinutes();
  
      // Convertir los minutos a horas y minutos en formato de hora
      const hours = Math.floor(minutes / 60) + 1;
      const remainingMinutes = Math.ceil(minutes % 60);
      const formattedHours = hours.toString().padStart(2, '0');
      const formattedMinutes = remainingMinutes === 60 ? '00' : remainingMinutes.toString().padStart(2, '0');
      const formattedTime = `${formattedHours}:${formattedMinutes} hrs`;
      
      
      setTotalHours(formattedTime);
      onSelectedHours(formattedTime)
    } else {
      setTotalHours('0');
    }
  };

  return (
    <div className="Calendar">
      <Calendar
        localizer={localizer}
        events={events}
        views={['month', 'week', 'day', 'agenda']}
        step={15}
        defaultView="month"
        defaultDate={new Date()}
        selectable
        onSelectEvent={handleEventSelected}
        onSelectSlot={handleSlotSelected}
        min={weekStart.toDate()}
        max={weekEnd.toDate()}
      />

      <Dialog
        open={openSlot}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            width: '100%',
            height: '100%',
            padding: '30px 50px',
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
            justifyContent: 'center',
          },
        }}
      >
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          multiline
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <TextField
          label="Start Time"
          type="time"
          value={start ? moment(start).format('HH:mm') : ''}
          onChange={handleStartTimeChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="End Time"
          type="time"
          value={end ? moment(end).format('HH:mm') : ''}
          onChange={handleEndTimeChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <span>{totalHours}</span>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={setNewAppointment}>Submit</Button>
      </Dialog>

      <Dialog
        open={openEvent && !confirmDelete}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            width: '100%',
            height: '100%',
            padding: '30px 50px',
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
            justifyContent: 'center',
          },
        }}
      >
        
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          multiline
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <TextField
          label="Start Time"
          type="time"
          value={start ? moment(start).format('HH:mm') : ''}
          onChange={handleStartTimeChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="End Time"
          type="time"
          value={end ? moment(end).format('HH:mm') : ''}
          onChange={handleEndTimeChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <span>{totalHours}</span>
        {eventActions}
        
      </Dialog>

      <Dialog
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        sx={{
          '& .MuiDialog-paper': {
            width: '60%',
            height: '30%',
            padding: '30px 50px',
            display: 'flex',
            gap: '20px',
            overflow: 'hidden',
            flexDirection: 'column',
            justifyContent: 'center',
          },
        }}
      >
        <p>Are you sure you want to delete this event?</p>
        <Button onClick={() => setConfirmDelete(false)}>Cancel</Button>
        <Button color="error" onClick={deleteEvent}>
          Delete
        </Button>
      </Dialog>
    </div>
  );
};

