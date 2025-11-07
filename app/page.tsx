import { MantineProvider } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import dayjs from "dayjs";

export default function Home() {
  return (
    <main>
      <MantineProvider>
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Home Page</h1>

        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto my-6">
          Welcome to our comprehensive course scheduling system. Here you can
          explore available courses, view teacher profiles, and manage your
          academic schedule. Use the date picker below to schedule your
          sessions, browse through our course catalog, or connect with our
          experienced teachers.
        </p>

        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <DateTimePicker
            label="Pick date and time"
            placeholder="Pick date and time"
            presets={[
              {
                value: dayjs().subtract(1, "day").format("YYYY-MM-DD HH:mm:ss"),
                label: "Yesterday",
              },
              { value: dayjs().format("YYYY-MM-DD HH:mm:ss"), label: "Today" },
              {
                value: dayjs().add(1, "day").format("YYYY-MM-DD HH:mm:ss"),
                label: "Tomorrow",
              },
              {
                value: dayjs().add(1, "month").format("YYYY-MM-DD HH:mm:ss"),
                label: "Next month",
              },
              {
                value: dayjs().add(1, "year").format("YYYY-MM-DD HH:mm:ss"),
                label: "Next year",
              },
              {
                value: dayjs()
                  .subtract(1, "month")
                  .format("YYYY-MM-DD HH:mm:ss"),
                label: "Last month",
              },
              {
                value: dayjs()
                  .subtract(1, "year")
                  .format("YYYY-MM-DD HH:mm:ss"),
                label: "Last year",
              },
            ]}
          />
        </div>
      </MantineProvider>
    </main>
  );
}
