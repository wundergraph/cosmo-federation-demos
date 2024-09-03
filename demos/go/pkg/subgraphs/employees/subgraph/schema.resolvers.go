package subgraph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.45

import (
	"context"
	"fmt"
	"time"

	"github.com/99designs/gqlgen/graphql"
	"github.com/wundergraph/cosmo-federation-demos/demos/go/pkg/subgraphs/employees/subgraph/generated"
	"github.com/wundergraph/cosmo-federation-demos/demos/go/pkg/subgraphs/employees/subgraph/model"
)

// RootFieldThrowsError is the resolver for the rootFieldThrowsError field.
func (r *employeeResolver) RootFieldThrowsError(ctx context.Context, obj *model.Employee) (*string, error) {
	return nil, fmt.Errorf("error resolving RootFieldThrowsError for Employee %d", obj.ID)
}

// RootFieldErrorWrapper is the resolver for the rootFieldErrorWrapper field.
func (r *employeeResolver) RootFieldErrorWrapper(ctx context.Context, obj *model.Employee) (*model.ErrorWrapper, error) {
	return &model.ErrorWrapper{
		OkField: strPtr("ok"),
	}, nil
}

// Employees is the resolver for the employees field.
func (r *engineerResolver) Employees(ctx context.Context, obj *model.Engineer) ([]*model.Employee, error) {
	return r.Resolver.Employees(ctx, obj)
}

// ErrorField is the resolver for the errorField field.
func (r *errorWrapperResolver) ErrorField(ctx context.Context, obj *model.ErrorWrapper) (*string, error) {
	return nil, fmt.Errorf("error resolving ErrorField")
}

// Employees is the resolver for the employees field.
func (r *marketerResolver) Employees(ctx context.Context, obj *model.Marketer) ([]*model.Employee, error) {
	return r.Resolver.Employees(ctx, obj)
}

// UpdateEmployeeTag is the resolver for the updateEmployeeTag field.
func (r *mutationResolver) UpdateEmployeeTag(ctx context.Context, id int, tag string) (*model.Employee, error) {
	if id < 1 {
		return nil, nil
	}
	r.mux.Lock()
	defer r.mux.Unlock()
	for _, employee := range employees {
		if id == employee.ID {
			details := &model.Details{}
			if employee.Details != nil {
				details.Forename = employee.Details.Forename
				details.Surname = employee.Details.Surname
				details.Location = employee.Details.Location
			}
			return &model.Employee{
				ID:        employee.ID,
				Details:   details,
				Tag:       tag,
				Role:      employee.Role,
				Notes:     employee.Notes,
				UpdatedAt: time.Now().String(),
				StartDate: employee.StartDate,
				A:         employee.A,
			}, nil
		}
	}
	return nil, nil
}

// SingleUpload is the resolver for the singleUpload field.
func (r *mutationResolver) SingleUpload(ctx context.Context, file graphql.Upload) (bool, error) {
	fmt.Printf("uploading file %s with size %d", file.Filename, file.Size)
	return true, nil
}

// MultipleUpload is the resolver for the multipleUpload field.
func (r *mutationResolver) MultipleUpload(ctx context.Context, files []*graphql.Upload) (bool, error) {
	for _, file := range files {
		fmt.Printf("uploading file %s with size %d", file.Filename, file.Size)
	}
	return true, nil
}

// Employees is the resolver for the employees field.
func (r *operatorResolver) Employees(ctx context.Context, obj *model.Operator) ([]*model.Employee, error) {
	return r.Resolver.Employees(ctx, obj)
}

// Employee is the resolver for the employee field.
func (r *queryResolver) Employee(ctx context.Context, id int) (*model.Employee, error) {
	r.mux.Lock()
	defer r.mux.Unlock()
	if id < 1 {
		return nil, nil
	}
	for _, employee := range employees {
		if id == employee.ID {
			return &model.Employee{
				ID: employee.ID,
				Details: &model.Details{
					Forename: employee.Details.Forename,
					Surname:  employee.Details.Surname,
					Location: employee.Details.Location,
				},
				UpdatedAt: time.Now().String(),
				Tag:       employee.Tag,
				Role:      employee.Role,
				Notes:     employee.Notes,
				StartDate: employee.StartDate,
				A:         employee.A,
			}, nil
		}
	}
	return nil, nil
}

// EmployeeAsList is the resolver for the employeeAsList field.
func (r *queryResolver) EmployeeAsList(ctx context.Context, id int) ([]*model.Employee, error) {
	emp, err := r.Employee(ctx, id)
	if err != nil {
		return nil, err
	}
	return []*model.Employee{emp}, nil
}

// Employees is the resolver for the employees field.
func (r *queryResolver) Employees(ctx context.Context) ([]*model.Employee, error) {
	r.mux.Lock()
	defer r.mux.Unlock()

	out := make([]*model.Employee, len(employees))
	for i, employee := range employees {
		out[i] = &model.Employee{
			ID:        employee.ID,
			Details:   employee.Details,
			Tag:       employee.Tag,
			Role:      employee.Role,
			Notes:     employee.Notes,
			UpdatedAt: time.Now().String(),
			StartDate: employee.StartDate,
			A:         employee.A,
		}
	}
	return out, nil
}

// Products is the resolver for the products field.
func (r *queryResolver) Products(ctx context.Context) ([]model.Products, error) {
	return products, nil
}

// Teammates is the resolver for the teammates field.
func (r *queryResolver) Teammates(ctx context.Context, team model.Department) ([]*model.Employee, error) {
	r.mux.Lock()
	defer r.mux.Unlock()
	switch team {
	case model.DepartmentMarketing:
		return marketers, nil
	case model.DepartmentOperations:
		return operators, nil
	default:
		return engineers, nil
	}
}

// FirstEmployee is the resolver for the firstEmployee field.
func (r *queryResolver) FirstEmployee(ctx context.Context) (*model.Employee, error) {
	r.mux.Lock()
	defer r.mux.Unlock()

	employee := &model.Employee{
		ID:        employees[0].ID,
		Details:   employees[0].Details,
		Tag:       employees[0].Tag,
		Role:      employees[0].Role,
		Notes:     employees[0].Notes,
		UpdatedAt: time.Now().String(),
		StartDate: employees[0].StartDate,
		A:         employees[0].A,
	}

	return employee, nil
}

// CurrentTime is the resolver for the currentTime field.
func (r *subscriptionResolver) CurrentTime(ctx context.Context) (<-chan *model.Time, error) {
	ch := make(chan *model.Time)

	go func() {
		defer close(ch)

		for {
			// In our example we'll send the current time every second.
			time.Sleep(1 * time.Second)

			currentTime := time.Now()
			t := &model.Time{
				UnixTime:  int(currentTime.Unix()),
				TimeStamp: currentTime.Format(time.RFC3339),
			}

			// The subscription may have got closed due to the client disconnecting.
			// Hence, we do send in a select block with a check for context cancellation.
			// This avoids goroutine getting blocked forever or panicking,
			select {
			case <-ctx.Done(): // This runs when context gets cancelled. Subscription closes.
				// Handle deregistration of the channel here. `close(ch)`
				return // Remember to return to end the routine.

			case ch <- t: // This is the actual send.
				// Our message went through, do nothing
			}
		}
	}()

	return ch, nil
}

// CountEmp is the resolver for the countEmp field.
func (r *subscriptionResolver) CountEmp(ctx context.Context, max int, intervalMilliseconds int) (<-chan int, error) {
	ch := make(chan int)

	go func() {
		defer close(ch)

		for i := 0; i <= max; i++ {
			select {
			case <-ctx.Done():
				return
			case ch <- i:
				time.Sleep(time.Duration(intervalMilliseconds) * time.Millisecond)
			}
		}
	}()

	return ch, nil
}

// CountEmp2 is the resolver for the countEmp2 field.
func (r *subscriptionResolver) CountEmp2(ctx context.Context, max int, intervalMilliseconds int) (<-chan int, error) {
	ch := make(chan int)

	go func() {
		defer close(ch)

		for i := 0; i <= max; i++ {
			select {
			case <-ctx.Done():
				return
			case ch <- i:
				time.Sleep(time.Duration(intervalMilliseconds) * time.Millisecond)
			}
		}
	}()

	return ch, nil
}

// Employee returns generated.EmployeeResolver implementation.
func (r *Resolver) Employee() generated.EmployeeResolver { return &employeeResolver{r} }

// Engineer returns generated.EngineerResolver implementation.
func (r *Resolver) Engineer() generated.EngineerResolver { return &engineerResolver{r} }

// ErrorWrapper returns generated.ErrorWrapperResolver implementation.
func (r *Resolver) ErrorWrapper() generated.ErrorWrapperResolver { return &errorWrapperResolver{r} }

// Marketer returns generated.MarketerResolver implementation.
func (r *Resolver) Marketer() generated.MarketerResolver { return &marketerResolver{r} }

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Operator returns generated.OperatorResolver implementation.
func (r *Resolver) Operator() generated.OperatorResolver { return &operatorResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

// Subscription returns generated.SubscriptionResolver implementation.
func (r *Resolver) Subscription() generated.SubscriptionResolver { return &subscriptionResolver{r} }

type employeeResolver struct{ *Resolver }
type engineerResolver struct{ *Resolver }
type errorWrapperResolver struct{ *Resolver }
type marketerResolver struct{ *Resolver }
type mutationResolver struct{ *Resolver }
type operatorResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type subscriptionResolver struct{ *Resolver }
