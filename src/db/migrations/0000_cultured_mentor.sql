CREATE TABLE "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"done" boolean DEFAULT false NOT NULL,
	"name" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updateAt" timestamp
);
