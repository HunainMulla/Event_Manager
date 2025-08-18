"use client";

import { useForm } from "react-hook-form";
import{useState} from "react"
import Events from "../Components/Events";

interface EventForm {
  name: string;
  date: string;
}

const Event_Form = () => {


  const [allEvents,setAllEvents] = useState<EventForm[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventForm>();

  const onSubmit = (data: EventForm) => {
    console.log(data);

    // Save to localStorage
    const existingEvents: EventForm[] = JSON.parse(localStorage.getItem("events") || "[]");
    setAllEvents((prev)=>([...prev,data]));
    localStorage.setItem("events", JSON.stringify([...existingEvents, data]));

    // Reset form after submit
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Event
          </h1>
          <p className="text-gray-600">
            Fill in the details below to create your event
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Event Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Name
              </label>
              <input
                {...register("name", { required: "Event name is required" })}
                type="text"
                placeholder="Enter event name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Date
              </label>
              <input
                {...register("date", { required: "Date is required" })}
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Create Event
            </button>
          </form>

          {/* Show Events */}
          <Events allEvents={allEvents} setAllEvents={setAllEvents}/>
        </div>
      </div>
    </div>
  );
};

export default Event_Form;
